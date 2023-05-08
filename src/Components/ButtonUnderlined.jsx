import React from 'react';
import '../Style/ButtonUnderlined.scss';

const ButtonUnderlined = ({ text, mode }) => {
  return <div className={mode}> {text}</div>;
};

export default ButtonUnderlined;
