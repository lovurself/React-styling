import React from "react";
import classNames from 'classnames';
import "./Button.scss";

// color: blue, pink, gray
function Button({ children, size, color }) {
  return <button className={classNames('Button', size, color)}>{children}</button>;
}

// 정석적인 방법
Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
