import SignUpForm from 'components/SignUpForm/SignUpForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <h1>Зареєструватися</h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignUpForm isLoading={isLoading} />
    </div>
  );
}

export default SignUpPage;
