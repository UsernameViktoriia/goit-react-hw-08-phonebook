import { Button } from 'components/Button/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from 'redux/userSlice/operations';
import {
  FormStyle,
  InputStyle,
  LabelSpanStyle,
  LabelWrapper,
} from './SignInForm.styled';

function SignInForm({ isLoading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    const finalData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(signIn(finalData));
    reset();
  };

  const reset = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <FormStyle onSubmit={onSubmit}>
      <LabelWrapper>
        <label>
          <LabelSpanStyle>Email:</LabelSpanStyle>
          <InputStyle
            type="text"
            name="email"
            onChange={onChange}
            value={formData.email}
            placeholder="example@gmail.com"
            required
          />
        </label>
        <label>
          <LabelSpanStyle>Password:</LabelSpanStyle>
          <InputStyle
            type="password"
            name="password"
            onChange={onChange}
            value={formData.password}
            placeholder="Enter Your Password"
            required
          />
        </label>
      </LabelWrapper>

      <Button type="submit" disabled={isLoading}>
        Login
      </Button>
    </FormStyle>
  );
}

export default SignInForm;
