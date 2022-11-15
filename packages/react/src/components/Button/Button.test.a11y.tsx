import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '..';
import { ButtonProps } from '.';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<Button />', () => {
  const defaultProps = {
    children: 'Button text',
    testId: 'test-button',
  };

  test(': should not have basic accessibility issues', async () => {
    const { container } = render(<Button {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test(': should render as an anchor element and not have basic accessibility issues', async () => {
    const props: ButtonProps = {
      ...defaultProps,
      href: 'https://lloyds.com/',
    };
    const { container } = render(<Button {...props} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  // test(': should renders with an icon and not have basic accessibility issues', async () => {
  //   const props: ButtonProps = {
  //     ...defaultProps,
  //     startIcon: 'copy',
  //   };
  //   const { container } = render(<Button {...props} />);
  //   const results = await axe(container);

  //   expect(results).toHaveNoViolations();
  // });
});
