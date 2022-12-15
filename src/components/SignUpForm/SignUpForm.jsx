import { Button } from 'components/Button/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../redux/userSlice/operations';
import {
  FormStyle,
  InputStyle,
  LabelSpanStyle,
  LabelWrapper,
} from './SignUpForm.styled';

function SignUpForm({ isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
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
      name: formData.name,
      password: formData.password,
    };
    dispatch(signUp(finalData));
    reset();
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <FormStyle onSubmit={onSubmit}>
      <LabelWrapper>
        <label>
          <LabelSpanStyle>Name:</LabelSpanStyle>
          <InputStyle
            type="text"
            name="name"
            onChange={onChange}
            value={formData.name}
            placeholder="Enter Your Username"
            required
          />
        </label>
        <label>
          <LabelSpanStyle>Email:</LabelSpanStyle>
          <InputStyle
            type="text"
            name="email"
            onChange={onChange}
            value={formData.email}
            placeholder="Enter Your Email"
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
        Sign up
      </Button>
    </FormStyle>
  );
}

export default SignUpForm;
