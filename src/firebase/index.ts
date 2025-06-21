import {initializeApp} from 'firebase/app';
import {getFunctions, httpsCallable} from 'firebase/functions';

// Import the private Firebase config
import { firebaseConfig } from './firebaseConfig.private';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

// GitHub Issue Creation Function
export const createGithubIssue = httpsCallable(functions, 'createGithubIssue');
