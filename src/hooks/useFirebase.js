import { useEffect, useState } from "react";
import initialization from "../Pages/SingUpIn/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

//initializefirebase app
initialization()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const registerUser = (email, password, location, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setUser(userCredential.user)
            })
            .catch((error) => {
                console.log("createAccoutError", error.message);
            }).finally(() => setLoading(false));
    }

    const userSignIn = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setUser(userCredential.user)
            })
            .catch((error) => {
                console.log("signinError", error.message)
            }).finally(() => setLoading(false));
    }

    const userSignOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            console.log('signOut successfully');
        }).catch((error) => {
            console.log("signOut", error.message)
        }).finally(() => setLoading(false));
    }

    //observe user present
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);



    return {
        loading,
        user,
        registerUser,
        userSignIn,
        userSignOut
    }
}

export default useFirebase;