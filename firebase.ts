
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// --- IMPORTANT ---
// Replace the placeholder values below with your actual Firebase project configuration.
// You can find this configuration in your Firebase project settings.
// Go to Project Settings > General > Your apps > Web app > SDK setup and configuration.
//
// This is necessary for the app to connect to your Firebase backend. The current values
// are placeholders and will cause the app to fail with an "invalid-api-key" error.
const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGEID",
  messagingSenderId: "MESSAGING_ID",
  appId: "APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
