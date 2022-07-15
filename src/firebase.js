
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01nB2or8fZUemEiwQHnTj7p9LL0A1Zto",
  authDomain: "upload-resume-c62e1.firebaseapp.com",
  projectId: "upload-resume-c62e1",
  storageBucket: "upload-resume-c62e1.appspot.com",
  messagingSenderId: "706871104014",
  appId: "1:706871104014:web:0c72c3550f5b0a7593625f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);