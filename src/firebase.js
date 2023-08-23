import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyCsUUVmzoxm-Rh26hwC3zqoE17UePhWmdQ",
  authDomain: "nandhi-farms-project.firebaseapp.com",
  projectId: "nandhi-farms-project",
  storageBucket: "nandhi-farms-project.appspot.com",
  messagingSenderId: "1013851459579",
  appId: "1:1013851459579:web:0bb25914fefdf806ae455e",
  measurementId: "G-ZSL32TXM2X"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app


