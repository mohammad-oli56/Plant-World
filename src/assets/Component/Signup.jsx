import React, { useContext } from 'react';
import { valueContext } from '../../Mainlayout/Mainlayout';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Signup = () => {

	const { signup, google } = useContext(valueContext)
	const location = useLocation();
	const from = location?.state?.from

	const navigate = useNavigate()

	const hendelgoogle = () => {
		google()
			.then((result) => {

				const user = result.user;
				console.log(user)
				navigate(from ? from : "/")
				toast('🦄 Wow so easy!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",

				});

			}).catch((error) => {

				console.log(error)
			});




	}


	const handelsignup = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		const { email, password, ...rest } = Object.fromEntries(formData.entries())



		// console.log(password, email, userProfile)


		signup(email, password)
			.then((result) => {

				const userProfile = {
					email,
					...rest,
					creationTime : result.user?.metadata?.creationTime,
					lastSignInTime : result.user?.metadata?.lastSignInTime
				}

				// Signed up 
				// const user = userCredential.user;
				// console.log(user)

				fetch('http://localhost:3000/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(userProfile)
				})
					.then(res => res.json())
					.then(data => {
						console.log('after profile same', data)
					})

				navigate(from ? from : "/")
				toast('Sign_up Successfuly', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",


				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage)
				// ..
			});

	}

	return (
		<div className="w-full max-w-md p-8 mx-auto my-8 space-y-3 rounded-xl bg-[#A8C686] dark:text-gray-800">
			<h1 className="text-2xl font-bold text-center">Sign-Up</h1>



			<form onSubmit={handelsignup} className="space-y-6">
				<div className="space-y-1 text-sm">

					<input type="text" name="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
				</div>

				<div className="space-y-1 text-sm">

					<input type="text" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
				</div>


				<div className="space-y-1 text-sm">

					<input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					<div className="flex justify-end text-xs dark:text-gray-600">
						{/* <a rel="noopener noreferrer" href="#">Forgot Password?</a> */}
					</div>
				</div>

				<div className="space-y-1 text-sm">

					<input type="text" name="photo" id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
				</div>

				<button
					type="submit"
					className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
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
				<a rel="noopener noreferrer" href="login" className="underline dark:text-gray-800">Sign up</a>
			</p>
		</div>
	);
};

export default Signup;