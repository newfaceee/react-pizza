import React from 'react';
import classNames from 'classnames';

const Button = ({className, children}) => {
  return (<div className={classNames('button', className)}>{children}</div>)
};

export default Button;
