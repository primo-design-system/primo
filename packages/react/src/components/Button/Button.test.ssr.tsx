import React from 'react';
import { renderToString } from 'react-dom/server';

import { Button } from '..';
import { ButtonProps } from '.';

describe('<Button /> Server-side rendering>', () => {
  const defaultProps = {
    children: 'Button text',
    testId: 'test-button',
  };

  test(': renders on a server without crashing', () => {
    const renderOnServer = () =>
      renderToString(
        <main>
          <Button {...defaultProps} />
        </main>
      );
    expect(renderOnServer).not.toThrow();
  });

  test(': renders with the type attribute', () => {
    const props: ButtonProps = {
      ...defaultProps,
      type: 'button',
    };
    const ElementButtonHtml = renderToString(<Button {...props} />);
    expect(ElementButtonHtml).toContain('type="button"');
  });

  test(': renders as an anchor element', () => {
    const props: ButtonProps = {
      ...defaultProps,
      href: 'https://google.com/',
    };
    const ElementButtonHtml = renderToString(<Button {...props} />);
    expect(ElementButtonHtml).toContain('href="https://google.com/"');
  });

  // test(': renders with an icon svg element', () => {
  //   const props: ButtonProps = {
  //     ...defaultProps,
  //     startIcon: 'copy',
  //   };
  //   const ElementButtonHtml = renderToString(<Button {...props} />);
  //   expect(ElementButtonHtml).toContain('role="img"');
  // });
});
