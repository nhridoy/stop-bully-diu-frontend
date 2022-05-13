import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import interceptor from "../../utils/interceptor";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordError, setPasswordError] = React.useState(null);
  const onSubmit = data => {
    console.log(data)
    if (data.password1 !== data.password2) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      interceptor.post('/create_user/', data).then(res => {
        console.log(res)
      })
    }
  }
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-semibold text-center p-4">Sign Up</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone"
              {...register('phone', { required: true })}
            />
            {errors.phone && <p className="text-red-500 text-xs italic">Phone is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', { required: true })}
            />
            {errors.username && <p className="text-red-500 text-xs italic">Username is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sid"
            >
              Sstudent ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sid"
              type="text"
              placeholder="Student ID"
              {...register('sid', { required: true })}
            />
            {errors.sid && <p className="text-red-500 text-xs italic">Student ID is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password1"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password1"
              type="password"
              placeholder="******************"
              {...register('password1', { required: true })}
            />
            {errors.password1 && <p className="text-red-500 text-xs italic">Password is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password2"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password2"
              type="password"
              placeholder="******************"
              {...register('password2', { required: true })}
            />
            {errors.password2 && <p className="text-red-500 text-xs italic">Password is required</p>}
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
