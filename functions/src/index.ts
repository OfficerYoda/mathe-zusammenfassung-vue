/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import {Octokit} from '@octokit/rest';

// Initialize Octokit with the GitHub Personal Access Token
const githubToken = functions.config().github?.token;

if (!githubToken) {
    functions.logger.error('GitHub token is not set in Firebase environment config. Please run: firebase functions:config:set github.token="YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"');
    // For a production function, you might want to throw an error here to prevent deployment without config
}

// Define the GitHub repository details
const GITHUB_REPO_OWNER = 'officeryoda'; // Your GitHub username or organization
const GITHUB_REPO_NAME = 'mathe-zusammenfassung-vue'; // The name of your repository

// Initialize Octokit only if the token is available
const octokit = githubToken ? new Octokit({auth: githubToken}) : null;

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
export const createGithubIssue = functions.https.onCall(async (data, context) => {
    // Validate incoming data
    const title = data?.data?.title
    const body = data?.data?.body

    if (!title || !body) {
        functions.logger.error('Missing title or body in the request.', {title, body});
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a title and a body.');
    }

    if (!octokit) {
        functions.logger.error('Octokit not initialized due to missing GitHub token.');
        throw new functions.https.HttpsError('internal', 'Server configuration error: GitHub token is missing.');
    }

    functions.logger.info(`Attempting to create GitHub issue: "${title}" in ${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`);

    try {
        const response = await octokit.rest.issues.create({
            owner: GITHUB_REPO_OWNER,
            repo: GITHUB_REPO_NAME,
            title: title,
            body: body,
            // Optionally, you can add labels or assignees here
            // labels: ['bug', 'enhancement'],
            // assignees: ['your-github-username'],
        });

        functions.logger.info('GitHub issue created successfully!', {
            issueUrl: response.data.html_url,
            issueNumber: response.data.number,
        });

        // Return the URL of the newly created issue
        return {
            success: true,
            issueUrl: response.data.html_url,
            issueNumber: response.data.number
        };
    } catch (error: any) {
        functions.logger.error('Error creating GitHub issue:', error);

        // Check if the error is due to an invalid token or permissions
        if (error.status === 401 || error.status === 403) {
            throw new functions.https.HttpsError(
                'permission-denied',
                'Authentication error or insufficient permissions. Check your GitHub PAT and repository settings.'
            );
        } else if (error.status === 404) {
            throw new functions.https.HttpsError(
                'not-found',
                'Repository not found. Check repository owner and name.'
            );
        } else {
            throw new functions.https.HttpsError(
                'internal',
                'Failed to create GitHub issue: ' + error.message
            );
        }
    }
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
