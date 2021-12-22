import React from 'react';
import { render } from 'react-dom';
import Routing from './Routing';

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  root,
);
