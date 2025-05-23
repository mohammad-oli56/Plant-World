import React, { useContext, useState } from 'react';
import { valueContext } from '../../Mainlayout/Mainlayout';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Signup = () => {
  const { signup, google } = useContext(valueContext);
  const location = useLocation();
  const from = location?.state?.from || '/';
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState('');

  const handleGoogle = () => {
    google()
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success('Sign in with Google successful!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });

        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters and include a-z, A-Z, and 0-9.');
      return;
    }

    setPasswordError('');

    signup(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...rest,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => console.log('User profile saved:', data));

        toast.success('Signup successful!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });

        navigate(from);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto my-8 space-y-3 rounded-xl bg-[#A8C686] dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Sign-Up</h1>
      <form onSubmit={handleSignup} className="space-y-6">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-3 rounded-md dark:bg-gray-50"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md dark:bg-gray-50"
          required
        />

        <div className="space-y-1 text-sm">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:bg-gray-50"
            required
          />
          {passwordError && (
            <p className="text-red-600 text-xs">{passwordError}</p>
          )}
        </div>

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="w-full px-4 py-3 rounded-md dark:bg-gray-50"
        />

        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
        >
          Sign up
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300" />
        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300" />
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogle}
          className="w-full py-3 border text-black flex items-center justify-center rounded-lg bg-gray-100 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>
      </div>

      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?{' '}
        <a rel="noopener noreferrer" href="/login" className="underline dark:text-gray-800">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
