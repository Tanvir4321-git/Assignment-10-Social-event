import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../Components/Context/Authcontext';
import { toast } from 'react-toastify';

const Login = () => {
  const { SignIn, goggoleSignin } = use(Authcontext)
  const navigate = useNavigate()
  const handleSignin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignIn(email, password)
      .then(() => {
        navigate('/')
        toast('Log in successful')
      })

      .catch(error => {
        toast(error.message)
      })


  }



  const handlegoogle = () => {
    goggoleSignin()
      .then(() => {
        navigate('/')
        toast('successfully log in')
      })
      .catch(error => {
        toast(error.message)
      })

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <title>Social Events-Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignin}>
            <h1 className="text-2xl text-center my-3 font-bold">Log in now!</h1>
            <fieldset className="fieldset">


              {/* Email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input text-gray-400" placeholder="Email" required />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input text-gray-400" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Log in</button>


              <p className="mt-2 text-sm">
                Don't have account? Please{" "}
                <Link to="/signup">
                  <span className="text-blue-600 font-medium cursor-pointer">Sign up</span>
                </Link>
              </p>
            </fieldset>
          </form>
          <button onClick={handlegoogle} type="submit" className="btn btn-neutral mt-4"> <FcGoogle size={25} /> Log in with goggle</button>
        </div>
      </div>
    </div>
  );
};

export default Login;