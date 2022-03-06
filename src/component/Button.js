import React from "react";
import classNames from 'classnames';
import "./Button.scss";

// size : large, midium(default), small
function Button({ children, size }) {
  // return <button className={['Button', size].join(' ')}>{children}</button>;
  // return <button className={`Button ${size}`}>{children}</button>;
  return <button className={classNames('Button', size)}>{children}</button>;
}

// 정석적인 방법
Button.defaultProps = {
  size: 'medium'
};

export default Button;
