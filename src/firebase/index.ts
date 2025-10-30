import {initializeApp} from 'firebase/app';
import {getFunctions, httpsCallable} from 'firebase/functions';

// Initialize Firebase
const app = initializeApp(
    {
        apiKey: "AIzaSyBgE2Qza83zTYF76KyzU9WgBagDV-iBZPo", // It's ok to expose the firebase key
        authDomain: "mathe-zusammenfassung.firebaseapp.com",
        projectId: "mathe-zusammenfassung",
        storageBucket: "mathe-zusammenfassung.firebasestorage.app",
        messagingSenderId: "352927676071",
        appId: "0:352927676072:web:bc7bbdfe219e5fa764f49d",
        measurementId: "G-F8RNZHSD31"
    }
)

const functions = getFunctions(app);

// GitHub Issue Creation Function
export const createGithubIssue = httpsCallable(functions, 'createGithubIssue');
