import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export const Button = ({
  onClick = () => {},
  type,
  children = '',
  disabled = false,
  value = '',
}) => {
  return (
    <ButtonStyle
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
