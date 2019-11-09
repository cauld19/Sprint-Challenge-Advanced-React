import React from 'react';
import  { render } from "@testing-library/react";
import Player from './Player';


test('renders without crashing player', () => {
  render(<Player />);
});


test('it displays name:', () => {
    const {getByText} = render(<Player />);
    getByText(/name:/i)
});