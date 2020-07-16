import React from 'react';
import classNames from 'classnames';

const Button = ({className, children}) => {
  // "button button--cart"
  return (<a href="/cart.html" className={classNames('button', className)}>{children}</a>)
};

export default Button;
