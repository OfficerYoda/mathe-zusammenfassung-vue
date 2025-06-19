/**
 * Firebase Cloud Functions using ES Module syntax
 */

import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { Octokit } from "@octokit/rest";

// Define the GitHub repository details
const GITHUB_REPO_OWNER = 'officeryoda'; // Your GitHub username or organization
const GITHUB_REPO_NAME = 'mathe-zusammenfassung-vue'; // The name of your repository

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
export const createGithubIssue = onCall(async (request) => {
    // Validate incoming data
    const { title, body } = request.data;

    // Log what we received to help debug
    logger.info(`Function called with title: "${title}" and body present: ${!!body}`);

    if (!title || !body) {
        logger.error('Missing title or body in the request.', {title, body});
        throw new Error('The function must be called with a title and a body.');
    }

    // Get the GitHub token from environment variables instead of using config()
    // In v2, environment variables are accessed directly via process.env
    const githubToken = process.env.github_token;

    logger.info(`GitHub token available: ${!!githubToken}`);

    if (!githubToken) {
        logger.error('GitHub token is not set in environment config');
        throw new Error('Server configuration error: GitHub token is missing. Set it with "firebase functions:config:set github.token=YOUR_TOKEN"');
    }

    try {
        // Initialize Octokit with the GitHub token
        logger.info(`Initializing Octokit client`);
        const octokit = new Octokit({
            auth: githubToken
        });

        logger.info(`Attempting to create GitHub issue: "${title}" in ${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`);

        const response = await octokit.rest.issues.create({
            owner: GITHUB_REPO_OWNER,
            repo: GITHUB_REPO_NAME,
            title: title,
            body: body,
        });

        logger.info('GitHub issue created successfully!', {
            issueUrl: response.data.html_url,
            issueNumber: response.data.number,
        });

        // Return the URL of the newly created issue
        return {
            success: true,
            issueUrl: response.data.html_url,
            issueNumber: response.data.number
        };
    } catch (error) {
        // Log the full error
        logger.error('Error creating GitHub issue:', error);

        // Narrow error type to access properties
        if (typeof error === 'object' && error !== null) {
            const err = error as { status?: number; message?: string };
            if (err.status === 401 || err.status === 403) {
                throw new Error('Authentication error or insufficient permissions. Check your GitHub PAT and repository settings.');
            } else if (err.status === 404) {
                throw new Error('Repository not found. Check repository owner and name.');
            } else {
                throw new Error(`Failed to create GitHub issue: ${err.message ?? 'Unknown error'}`);
            }
        } else {
            throw new Error('An unknown error occurred while creating the GitHub issue.');
        }
    }
});
