import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../assets/Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../assets/Component/Footer';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { ToastContainer } from 'react-toastify';
export const valueContext = createContext();

const Mainlayout = () => {
    const provider = new GoogleAuthProvider();
    const [userprofile, setUserprofile] = useState(null);
    const [loding, setLoding] = useState(true);


    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const google = () => {

        return signInWithPopup(auth, provider)

    }

    

     const uselogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     setUserprofile(user);
    //     // console.log(user)
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode,errorMessage)
    // });
  }


    const handelLogout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });

    }


    useEffect(() => {

        const unscribe = onAuthStateChanged(auth, (userprofile) => {

            // console.log(userprofile)

            setUserprofile(userprofile);
            setLoding(false);

            if (userprofile) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //   const uid = userprofile.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        return () => {
            unscribe();
        }

    }, [])


    const ContextValues = {
        signup,
        google,
        userprofile,
        loding,
        handelLogout,
        uselogin

    }
    return (
        <div>
            <valueContext.Provider value={ContextValues}>
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-116px)]'>
                    <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </valueContext.Provider>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Mainlayout;