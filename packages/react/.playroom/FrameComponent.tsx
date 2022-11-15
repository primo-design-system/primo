// .playroom/FrameComponent.tsx

import React, { FunctionComponent } from 'react';

import '@primo/tokens/dist/css/tokens.css';
import '@primo/styles/dist/style.min.css';
import '@primo/components/dist/style.min.css';

const FrameComponent: FunctionComponent = ({ children }) => {
  const body = document.body;
  body.classList.add("primo");

  return (
    <>
      <div className='pds-ThemeProvider pds-ThemeProvider--primo'>{children}</div>
    </>
  );
};

export default FrameComponent;
