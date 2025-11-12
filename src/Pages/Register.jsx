import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../Components/Context/Authcontext';
import { toast } from 'react-toastify';

const Register = () => {
  const [error, seterror] = useState('')
  const { setuser, Register, updateuserProfile } = use(Authcontext)
  const navigate = useNavigate()

  const handleSignup = (e) => {
    //error message remove
    seterror('')

    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    if (!name) {
      return seterror('please input your name')
    }
    const photo = form.photo.value;
    if (!photo) {
      return seterror('please put your photo url')
    }
    const email = form.email.value;
    if (!email) {
      return seterror('please put your email')
    }
    const password = form.password.value;
    const validpass = /(?=.*[A-Z])(?=.*[a-z]).{6,}/
    if (!validpass.test(password)) {

      return seterror('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
    }
    Register(email, password)
      .then(res => {

        updateuserProfile(name, photo)
          .then()

          .catch(er => toast(er.message))


        toast('successfully Register')
        setuser(res.user)
        navigate('/')

      })
      .catch(error => {
        toast(error.message)

      })

    e.target.reset()
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <title>Social-Events- Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignup}>
            <h1 className="text-2xl text-center my-3 font-bold">Register now!</h1>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input text-gray-400" placeholder="Your name" />

              {/* photo */}
              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input text-gray-400" placeholder="Photo URL" />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input text-gray-400" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input text-gray-400" placeholder="Password" />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>
              {
                error ? <p className='text-red-600'>{error}</p> : ''
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