import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("renders App without crashing", () => {
  render(<App />);
});

test("verify Warren text is in app", async () => {
  //arrange
  const { getByText } = render(<App />);
  //act
  const verify1 = getByText(/warren/i)
  //assert
  expect(verify1).toBeInTheDocument();
})

