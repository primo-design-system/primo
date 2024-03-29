import React, { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '..';
import { ButtonProps } from '.';
// import { IconTypes } from '../Icon/Icon.types';

describe('<Button />', () => {
  const defaultProps = {
    children: 'Button text',
    testId: 'test-button',
  };

  test(': matches snapshot', () => {
    const { container } = render(<Button {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test(': matches snapshot as an anchor', () => {
    const props = {
      ...defaultProps,
      href: 'https://google.com',
    };
    const { container } = render(<Button {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // test(': matches snapshot with an icon', () => {
  //   const props = {
  //     ...defaultProps,
  //     startIcon: 'copy' as IconTypes,
  //   };
  //   const { container } = render(<Button {...props} />);

  //   expect(container.firstChild).toMatchSnapshot();
  // });

  test(': renders', () => {
    const props = {
      ...defaultProps,
      children: 'Test text',
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-button')).toHaveClass('primo-Button');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.queryByText('Test text')).toBeTruthy();
  });

  test(': renders as an anchor element', () => {
    const props: ButtonProps = {
      ...defaultProps,
      href: 'https://google.com/',
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveAttribute('href');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('test-button')).toHaveAttribute('href', 'https://google.com/');
  });

  test.each([
    ['size', 'small'],
    ['size', 'large'],
  ])(': renders as %s by the %s value', (propName, propValue) => {
    const props = {
      ...defaultProps,
      [propName]: propValue,
    };
    const { rerender } = render(<Button {...defaultProps} />);
    const modifierClass = `${propName}${propValue.charAt(0).toUpperCase() + propValue.slice(1)}`;
    expect(screen.getByTestId('test-button')).not.toHaveClass(`primo-Button--${modifierClass}`);
    rerender(<Button {...props} />);
    expect(screen.getByTestId('test-button')).toHaveClass(`primo-Button--${modifierClass}`);
  });

  test(': is set to `disabled` by the isDisabled prop', () => {
    const props = {
      ...defaultProps,
      isDisabled: true,
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveAttribute('disabled');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('test-button')).toHaveAttribute('disabled');
    expect(screen.getByTestId('test-button')).not.toHaveAttribute('aria-disabled', 'true');
  });

  test(': is set to `width: 100%;` by the isFullWidth prop', () => {
    const props = {
      ...defaultProps,
      isFullWidth: true,
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveClass('primo-Button--fullWidth');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('test-button')).toHaveClass('primo-Button--fullWidth');
  });

  test(': is set with class by the `className` prop', () => {
    const props = {
      ...defaultProps,
      className: 'primo-Button--modifier',
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveClass('primo-Button--modifier');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('test-button')).toHaveClass('primo-Button--modifier');
  });

  test(": is set to `type='submit'` by the type prop", () => {
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveAttribute('type', 'submit');

    // Change props
    rerender(<Button {...defaultProps} type={'submit'} />);

    expect(screen.getByTestId('test-button')).toHaveAttribute('type', 'submit');
  });

  test(': `href` set to `undefined` by the isDisabled prop on anchor', () => {
    const props: ButtonProps = {
      ...defaultProps,
      isDisabled: true,
      href: 'https://google.com/',
    };
    const { rerender } = render(<Button {...defaultProps} />);

    expect(screen.getByTestId('test-button')).not.toHaveAttribute('disabled');
    expect(screen.getByTestId('test-button')).not.toHaveAttribute('href');

    // Change props
    rerender(<Button {...props} />);

    expect(screen.getByTestId('test-button')).toHaveAttribute('aria-disabled');
    expect(screen.getByTestId('test-button')).not.toHaveAttribute('href', 'https://google.com/');
  });

  test(': should call `onClick` function when mouseevent `click` is performed', () => {
    const handleClick = jest.fn();
    const props = {
      ...defaultProps,
      onClick: handleClick,
    };
    render(<Button {...props} />);

    fireEvent(
      screen.getByTestId('test-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    // onClick function has been called.
    expect(handleClick).toBeCalled();
  });

  it(': set `ref` to be true on Button', () => {
    const ref = createRef<HTMLButtonElement>();
    const props = {
      ref,
    };

    expect(ref.current).toBeFalsy();

    render(<Button {...props}>Click me!</Button>);

    expect(ref.current).toBeTruthy();
  });
});
