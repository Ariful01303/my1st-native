import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCt1QKmA8NgD1_Th-bZ3sYbaFLADbPUdhA",
  authDomain: "new-one-cddfe.firebaseapp.com",
  projectId: "new-one-cddfe",
  storageBucket: "new-one-cddfe.appspot.com",
  messagingSenderId: "535044578779",
  appId: "1:535044578779:web:2a6aa2e21c9feb90671bfe",
  measurementId: "G-1FZ8JP57EJ"
};
const app =initializeApp(firebaseConfig)
export const authentication=getAuth(app)