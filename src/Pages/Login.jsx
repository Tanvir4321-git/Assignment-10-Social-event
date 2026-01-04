import React, { useState, useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../Components/Context/Authcontext';
import { toast } from 'react-toastify';

const Login = () => {
  const { SignIn, goggoleSignin } = useContext(Authcontext); // useContext
  const navigate = useNavigate();

  // 1️⃣ State for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2️⃣ Handle form submit
  const handleSignin = (e) => {
    e.preventDefault();

    SignIn(email, password)
      .then(() => {
        navigate('/');
        toast('Log in successful');
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  // 3️⃣ Google login
  const handlegoogle = () => {
    goggoleSignin()
      .then(() => {
        navigate('/');
        toast('Successfully logged in');
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  // 4️⃣ Fill credential button
  const handleUserCredential = () => {
    setEmail('user@gmail.com'); // set your default email
    setPassword('123456As');        // set your default password
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>Social Events-Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignin}>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-center my-3 font-bold">
                Welcome to Login!
              </h1>
              {/* 5️⃣ User Credential Button */}
              <button
                type="button"
                onClick={handleUserCredential}
                className="btn"
              >
                User Credential
              </button>
            </div>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input text-gray-400"
                placeholder="Email"
                value={email} // bind to state
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input text-gray-400"
                placeholder="Password"
                value={password} // bind to state
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Log in
              </button>

              <p className="mt-2 text-sm">
                Don't have account? Please{' '}
                <Link to="/signup">
                  <span className="text-blue-600 font-medium cursor-pointer">
                    Sign up
                  </span>
                </Link>
              </p>
            </fieldset>
          </form>

          <button
            onClick={handlegoogle}
            type="button"
            className="btn btn-neutral mt-4"
          >
            <FcGoogle size={25} /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
