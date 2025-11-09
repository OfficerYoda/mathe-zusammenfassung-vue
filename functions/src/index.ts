import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { logger } from 'firebase-functions';
import { Octokit } from '@octokit/rest';
import nodemailer from 'nodemailer';
import { marked } from 'marked';

// --- Configuration Parameters ---
// Define your GitHub Personal Access Token (PAT) as a secret
const githubPat = defineSecret('GITHUB_TOKEN');
const smtpUser = defineSecret('SMTP_USER');
const smtpPass = defineSecret('SMTP_PASS');

const GITHUB_REPO_OWNER = 'officeryoda';
const GITHUB_REPO_NAME = 'mathe-zusammenfassung-vue';

/**
 * Callable Cloud Function to create a GitHub issue.
 *
 * This function expects data containing:
 * - title: The title of the GitHub issue.
 * - body: The body content of the GitHub issue.
 *
 * Example request data:
 * {
 *   "title": "Bug in Chapter: Analysis - Integrale",
 *   "body": "Major Chapter: Analysis\nMinor Chapter: Integrale\nDescription: ..."
 * }
 */
export const createGithubIssue = onCall(
  {
    secrets: [githubPat, smtpUser, smtpPass], // Declare that this function needs access to the secret
  },
  async (request) => {
    // Validate incoming data
    const { title, body } = request.data;

    // Log what we received to help debug
    logger.info(`Function called with title: "${title}" and body present: ${!!body}`);

    if (!title || !body) {
      logger.error('Missing title or body in the request.', { title, body });
      // Use HttpsError for client-facing errors
      throw new HttpsError('invalid-argument', 'The function must be called with a title and a body.');
    }

    // Access the secret value
    const githubToken = githubPat.value();

    // This check is technically redundant if `secrets: [githubPat]` is used,
    // as the function won't even start if the secret isn't available.
    // However, it can act as an extra runtime safeguard or for clarity.
    if (!githubToken) {
      logger.error('GitHub token is not set or accessible via Secret Manager.');
      throw new HttpsError('internal', 'Server configuration error: GitHub token is missing.');
    }

    try {
      // Initialize Octokit with the GitHub token
      logger.info(`Initializing Octokit client`);
      const octokit = new Octokit({
        auth: githubToken,
      });

      logger.info(`Attempting to create GitHub issue: "${title}" in ${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`);

      const response = await octokit.rest.issues.create({
        owner: GITHUB_REPO_OWNER,
        repo: GITHUB_REPO_NAME,
        title: title,
        body: body,
        labels: ['fehler'],
      });

      logger.info('GitHub issue created successfully!', {
        issueUrl: response.data.html_url,
        issueNumber: response.data.number,
      });

      // Send email with mistake report
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: smtpUser.value(),
          pass: smtpPass.value(),
        },
      });

      // Render the markdown body as HTML
      const htmlBody = marked.parse(body);

      const mailOptions = {
        from: 'notifications@officeryoda.dev',
        to: 'reports@officeryoda.dev',
        subject: `${title}`,
        html: `<h3><a href="${response.data.html_url}">GitHub Issue</a></h3>${htmlBody}`
      };

      try {
        await transporter.sendMail(mailOptions);
        logger.info('Report email sent successfully.\nBody:\n', body);
      } catch (emailError) {
        logger.error('Failed to send report email.', emailError);
        // Do not throw here to avoid failing the whole function
      }

      // Return the URL of the newly created issue
      return {
        success: true,
        issueUrl: response.data.html_url,
        issueNumber: response.data.number
      };
    } catch (error) {
      // Log the full error
      logger.error('Error creating GitHub issue:', error);

      // Use HttpsError for client-facing errors with appropriate codes
      if (typeof error === 'object' && error !== null && 'status' in error) {
        const err = error as { status?: number; message?: string };
        if (err.status === 401 || err.status === 403) {
          throw new HttpsError('unauthenticated', 'Authentication error or insufficient permissions. Check your GitHub PAT and repository settings.');
        } else if (err.status === 404) {
          throw new HttpsError('not-found', 'Repository not found. Check repository owner and name.');
        } else {
          // For other Octokit errors, provide a generic internal error
          throw new HttpsError('internal', `Failed to create GitHub issue: ${err.message ?? 'Unknown Octokit error'}`);
        }
      } else {
        // For completely unexpected errors
        throw new HttpsError('internal', 'An unknown error occurred while creating the GitHub issue.');
      }
    }
  }
);
