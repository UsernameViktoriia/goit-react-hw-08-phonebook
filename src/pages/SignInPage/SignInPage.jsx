import Notiflix from 'notiflix';
import SignInForm from 'components/SignInForm/SignInForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitlePage } from './SignInPage.styled';

function SignInPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <TitlePage>Login to your account</TitlePage>
      {error.length > 0 &&
        Notiflix.Notify.warning('Please enter valid information')}
      <SignInForm isLoading={isLoading} />
    </div>
  );
}

export default SignInPage;
