import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../FireBaseConfiq';

const goggleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null)

  const [loading, setloading] = useState(true)
  //Register
  const Register = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //Sign in
  const SignIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //sign in with goggle
  const goggoleSignin = () => {
    setloading(true)
    return signInWithPopup(auth, goggleProvider)
  }
  //sign out 
  const logOut = () => {

    return signOut(auth)
  }

  //update prodfile
  const updateuserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
      setloading(false)
    })
    return () => {
      unsbscribe()
    }
  }, [])
  const Authinfo = {
    user,
    setuser,
    loading,
    setloading,
    Register,
    SignIn,
    goggoleSignin,
    logOut,
    updateuserProfile

  }

  return <Authcontext value={Authinfo}>{children}</Authcontext>

};

export default Authprovider;