
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4lUsp-3SJq3fPY1GZS1rJ2wiGh9NL4Fo",
  authDomain: "australbrassfoundry-5ec31.firebaseapp.com",
  projectId: "australbrassfoundry-5ec31",
  storageBucket: "australbrassfoundry-5ec31.appspot.com",
  messagingSenderId: "638113148883",
  appId: "1:638113148883:web:2e2d6bb64a6775751e4926",
  measurementId: "G-VVHHV7SYWX"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export default app;
