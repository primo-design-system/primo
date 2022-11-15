/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classNames from 'classnames';
import React, { forwardRef, FunctionComponent } from 'react';
import type { ButtonProps, PolymorphicButton } from './Button.types';
// import { BackgroundProviderContext } from '../BackgroundProvider';

// import Icon from '../Icon';

/**
 * Button component.
 *
 * @component
 * @example
 * const type = 'submit'
 * const tabIndex = 0
 * return (
 *   <Button type={type} tabIndex={tabIndex}>Submit</Button>
 * )
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(
  (
    {
      children,
      className,
      id,
      variant,
      isDisabled = false,
      isFullWidth,
      isSmall,
      onClick,
      testId,
      rel,
      // startIcon,
      // endIcon,
      // iconLabel,
      target,
      type = 'button',
      tabIndex,
      value,
      href,
      name,
      ...props
    },
    ref
  ) => {
    // const { Background } = useContext(BackgroundProviderContext);
    const buttonClasses = classNames({
      'pds-Button': true,
      'pds-Button--primary': variant === 'primary',
      'pds-Button--secondary': variant === 'secondary',
      'pds-Button--tertiary': variant === 'tertiary',
      'pds-Button--positive': variant === 'positive',
      'pds-Button--negative': variant === 'negative',
      'pds-Button--fullWidth': !!isFullWidth,
      'pds-Button--small': !!isSmall,
      // 'pds-Button--onDarkBackground': Background === 'dark',
      // 'pds-Button--endIcon': !!endIcon && !startIcon,
      // 'pds-Button--startIcon': !!startIcon && !endIcon,
      // 'pds-Button--onlyIcon': (!!startIcon || !!endIcon) && !children,
      'is-disabled': !!isDisabled,
      [`${className}`]: className,
    });

    const commonProps = {
      className: buttonClasses,
      'data-testid': testId,
      id,
      onClick,
      ref,
      tabIndex,
    };

    const anchorProps = {
      ...commonProps,
      'aria-disabled': isDisabled,
      href: isDisabled ? undefined : href,
      target,
      rel,
    };

    const buttonProps = {
      ...commonProps,
      disabled: isDisabled,
      name,
      type,
      value,
    };

    // const iconProps = {
    //   testId: `${testId}-svg`,
    //   isSmall: !!isSmall,
    // };

    const Component = href ? 'a' : 'button';
    const componentProps = Component === 'button' ? buttonProps : anchorProps;
    const componentContent = (
      <>
        {/* {!!startIcon && !endIcon && (
          <Icon name={startIcon} label={iconLabel} {...iconProps} />
        )} */}
        {children}
        {/* {endIcon && !startIcon && (
          <Icon name={endIcon} label={iconLabel} {...iconProps} />
        )} */}
      </>
    );

    return React.createElement(
      Component,
      {
        ...componentProps,
        ...props,
      },
      componentContent
    );
  }
) as PolymorphicButton;

export default Button;
