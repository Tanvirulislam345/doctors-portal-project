import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initialization = () => {
    initializeApp(firebaseConfig);
}

export default initialization;