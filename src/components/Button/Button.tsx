import { FC } from 'react';

import { classnames } from 'src/utils';
import buttonType from 'src/types/button';

import styles from './Button.module.scss';

const Button: FC<buttonType> = ({
  variant,
  bgColor,
  radius = 1000,
  height,
  isDisabled,
  onClick,
  children,
}) => {
  
  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      className={classnames([
        styles.button,
        styles[`button__${variant}`],
        styles[`button-color__${bgColor}`],
      ])}
      style={{
        height,
        borderRadius: radius,
      }}
      disabled={isDisabled}
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
