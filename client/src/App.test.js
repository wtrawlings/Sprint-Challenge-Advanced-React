import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import { exact } from 'prop-types';

 it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
 });

test("renders App without crashing", () => {
  render(<App />);
});

test("verify Warren text is in app", async () => {
  //arrange
  const { getByText } = render(<App />);
  //act
  const verify1 = getByText(/warren/i)
  //notice getByText absorbs the whole text element 
  //not just what was looked for?
  //you can't just test for .toBe(Warren)

  //assert
  expect(verify1.innerHTML).toBe("You can do this Warren!");
})

test("verify toggle value change", async () => {
  //arrange
  const { getByText } = render (<App />)
  //act
  //simulate click
  fireEvent.click(button);
  const bool1 = getByText(/true/i);
  
  //assert
  expect()
})
