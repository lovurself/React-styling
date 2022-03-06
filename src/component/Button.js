import React from "react";
import classNames from 'classnames';
import "./Button.scss";

// outline, fullWidth : boolean type
function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return <button className={classNames('Button', size, color, {
    outline,
    fullWidth
  })}
    {...rest}
  >
    {children}
  </button>;
}

// 정석적인 방법
Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
