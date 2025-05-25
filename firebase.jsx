import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; //If you enabled analytics

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID", //If you enabled analytics
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); //If you enabled analytics

export default app;
