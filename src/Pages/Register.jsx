import React, { useState } from 'react';
import { Link } from 'react-router';

const Register = () => {
      const [error,seterror]=useState('')

const handleSignup=(e)=>{
   //error message remove
seterror('')

    e.preventDefault()
      const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const validpass=/(?=.*[A-Z])(?=.*[a-z]).{6,}/
    if(!validpass.test(password)){

      return seterror('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
    }
}


    return (
          <div className='flex justify-center items-center min-h-screen'>
          <title>Game Hub- Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignup}>
            <h1 className="text-2xl text-center my-3 font-bold">Register now!</h1>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input  type="text" name="name" className="input text-gray-400" placeholder="Your name" required />

              {/* photo */}
              <label className="label">Photo URL</label>
              <input  type="text" name="photo" className="input text-gray-400" placeholder="Photo URL" />

              {/* Email */}
              <label className="label">Email</label>
              <input  type="email" name="email" className="input text-gray-400" placeholder="Email" required />

              {/* password */}
              <label className="label">Password</label>
              <input  type="password" name="password" className="input text-gray-400" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>
{
  error? <p className='text-red-600'>{error}</p>:''
}
              <p className="mt-2 text-sm">
                Already have an account? Please{" "}
                <Link to="/signin">
                  <span className="text-blue-600 font-medium cursor-pointer">Log in</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;