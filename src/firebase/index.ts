import {initializeApp} from 'firebase/app';
import {getFunctions, httpsCallable} from 'firebase/functions';

// Your web app's Firebase configuration
// Replace these with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBI2oIuLGEj3CwESwUn_YKLX9c6-MinVlQ",
    authDomain: "mathe-zusammenfassung.firebaseapp.com",
    projectId: "mathe-zusammenfassung",
    storageBucket: "mathe-zusammenfassung.firebasestorage.app",
    messagingSenderId: "352927676072",
    appId: "1:352927676072:web:bc7bbdfe219e5fa764f49d",
    measurementId: "G-F9RNZHSD31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

// GitHub Issue Creation Function
export const createGithubIssue = httpsCallable(functions, 'createGithubIssue');
