import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../actions/auth';

const Auth = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const userData = { /* Your user data from Firebase */ };
    dispatch(signIn(userData))
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="auth">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
