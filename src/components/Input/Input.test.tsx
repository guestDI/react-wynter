import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

test('renders input correctly', () => {
    const {container} = render(<Input onChange={() => {}} className="input"/>);
    const inputElement = container.querySelector(".input");
    expect(inputElement).toBeInTheDocument();
});

test('value renders correctly', () => {
    const {container} = render(<Input onChange={() => {}} value="23" className="input"/>);
    const inputElement: HTMLInputElement = container.querySelector(".input")!
    expect(inputElement.value).toBe("23");
 });

test('onChange triggered correctly', () => {
    const onChange = jest.fn((value) => value)

    const {container} = render(<Input onChange={onChange} className="input"/>);
    const inputElement = container.querySelector(".input");

    fireEvent.change(inputElement!, {
        target: { value: "updatedValue" },
      })
  
      expect(onChange).toHaveBeenCalledWith("updatedValue")
  });
