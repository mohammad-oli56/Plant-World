import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../../Mainlayout/Mainlayout';
import { toast } from 'react-toastify';

const Login = () => {
	const { uselogin, google } = useContext(valueContext)

	const navigate = useNavigate()
	const location = useLocation();
	const from = location?.state?.from
	console.log(location)

	const hendelgoogle = () => {
		google().then((result) => {

			toast.success('LogIn successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				// transition: Bounce,
			});
			const user = result.user;
			console.log(user)


			navigate(from ? from : "/")



		}).catch((error) => {
			// Handle Errors here.
			console.log(error)
			// ...
		});

	}

	const handellogin = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		// console.log(email, password);

		uselogin(email, password).then((userCredential) => {

			const user = userCredential.user;

			toast.success('LogIn successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				// transition: Bounce,
			});

			console.log(user)

			navigate(from ? from : "/")



			// ...
		})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage)

				// ..
			});

	};


	return (
		<div className="w-full max-w-md p-8 mx-auto my-8 space-y-3 rounded-xl bg-[#A8C686] dark:text-gray-800">
			<h1 className="text-2xl font-bold text-center">Login</h1>
			<form onSubmit={handellogin} className="space-y-6">
				<div className="space-y-1 text-sm">
					<label htmlFor="Email" className="block dark:text-gray-600">Username</label>
					<input type="email" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="password" className="block dark:text-gray-600">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					<div className="flex justify-end text-xs dark:text-gray-600">
						<a rel="noopener noreferrer" href="#">Forgot Password?</a>
					</div>
				</div>
				<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
			</form>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
				<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
			</div>
			<div className="flex justify-center space-x-4">
				<button onClick={hendelgoogle} className="w-full py-3 border text-black flex items-center justify-center rounded-lg bg-gray-100 transition">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
						alt="Google"
						className="h-5 w-5 mr-2"
					/>
					Continue with Google
				</button>
			</div>
			<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
				<a rel="noopener noreferrer" href="/signup" className="underline dark:text-gray-800">Sign up</a>
			</p>
		</div>
	);
};

export default Login;