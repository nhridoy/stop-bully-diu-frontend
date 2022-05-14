import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import interceptor from "../../utils/interceptor";

const SignIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [error, setError] = React.useState(null)

  const onSubmit = data => {
    setError(null)

    interceptor.post('/token/', data).then(
      res => {
        console.log(res);
      }
    ).catch(err => {
      setError(err.response?.data.detail)
    })
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-semibold text-center p-4">Sign In</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
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
              required
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              required
              placeholder="******************"
              {...register('password', { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">Password is required</p>}

          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
