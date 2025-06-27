import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../assets/Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../assets/Component/Footer';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';

export const valueContext = createContext();

const Mainlayout = () => {
  const provider = new GoogleAuthProvider();
  const [userprofile, setUserprofile] = useState(null);
  const [loding, setLoding] = useState(true);

  // Theme state
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userprofile) => {
      setUserprofile(userprofile);
      setLoding(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const google = () => signInWithPopup(auth, provider);
  const uselogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const handelLogout = () => signOut(auth).catch(console.error);

  const handelForgetpass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Reset password email sent!"))
      .catch(() => toast.error("Failed to send reset email."));
  };

  const ContextValues = {
    signup,
    google,
    userprofile,
    loding,
    handelLogout,
    uselogin,
    handelForgetpass,
    theme,
    toggleTheme,
  };

  return (
    <valueContext.Provider value={ContextValues}>
      <Navbar />
      <div className="min-h-[calc(100vh-116px)] mt-[100px] max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </valueContext.Provider>
  );
};

export default Mainlayout;
