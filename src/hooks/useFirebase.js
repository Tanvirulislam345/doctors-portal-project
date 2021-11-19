import { useEffect, useState } from "react";
import initialization from "../Pages/SingUpIn/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

//initializefirebase app
initialization()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //update user name
                const newUser = { email, displayName: 'name' };
                setUser(newUser);

                //save user to data base
                saveUsers(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    console.log('displayName error', error.message);
                });
                history.replace('/home');

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

    const signInUsingGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUsers(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setUser(user);
            }).catch((error) => {
                console.log("googleSignin", error.message);
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

    //save and update user details
    const saveUsers = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:7000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };



    return {
        loading,
        user,
        registerUser,
        userSignIn,
        signInUsingGoogle,
        userSignOut
    }
}

export default useFirebase;