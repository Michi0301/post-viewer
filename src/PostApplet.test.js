import React from 'react';
import ReactDOM from 'react-dom';
import PostApplet from './PostApplet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostApplet />, div);
});
