import Notiflix from 'notiflix';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitlePage } from './SignUpPage.styled';

function SignUpPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <TitlePage>Create an account</TitlePage>
      {error.length > 0 &&
        Notiflix.Notify.warning('Please enter valid information')}
      <SignUpForm isLoading={isLoading} />
    </div>
  );
}

export default SignUpPage;
