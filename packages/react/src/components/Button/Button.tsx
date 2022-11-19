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
      'primo-Button': true,
      'primo-Button--primary': variant === 'primary',
      'primo-Button--secondary': variant === 'secondary',
      'primo-Button--tertiary': variant === 'tertiary',
      'primo-Button--positive': variant === 'positive',
      'primo-Button--negative': variant === 'negative',
      'primo-Button--fullWidth': !!isFullWidth,
      'primo-Button--small': !!isSmall,
      // 'primo-Button--onDarkBackground': Background === 'dark',
      // 'primo-Button--endIcon': !!endIcon && !startIcon,
      // 'primo-Button--startIcon': !!startIcon && !endIcon,
      // 'primo-Button--onlyIcon': (!!startIcon || !!endIcon) && !children,
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
