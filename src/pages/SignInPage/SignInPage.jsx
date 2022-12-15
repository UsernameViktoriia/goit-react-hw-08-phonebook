import SignInForm from 'components/SignInForm/SignInForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    console.log(user);
    navigate('/sign-in');
  }, [user, navigate]);

  return (
    <div>
      <h1>Sign In</h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignInForm isLoading={isLoading} />
    </div>
  );
}

export default SignInPage;
