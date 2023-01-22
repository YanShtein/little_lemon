import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { validateEmail, validatePhone } from './components/Booking/fieldsValidation';
import BookingPage, { updateTimes, initializeTimes } from './components/Booking/BookingPage';

test('Text exists in BookingForm page.', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose date/i);
  expect(linkElement).toBeInTheDocument();
});

describe(
  'initialTimes Array',
  () => {
    it(
      'should return non empty array and contain value of "17:00".',
      () => {
        expect(initializeTimes()).toContain('17:00');
      }
    );
  }
);

describe(
  'updateTimes Reducer function',
  () => {
    it(
      'should return array of times, based on date passed.',
      () => {
        const date = new Date();
        const action = { type: 'date', payload: date };
        const availableTimes = updateTimes([], action);
        expect(availableTimes).toContain('17:00');
        expect(availableTimes).toBeInstanceOf(Array);
      }
    );
  }
);

describe(
  'Testing for local storage',
  () => {
    it(
      'should set and get item from localStorage.',
      () => {
        const localKey = 'Test-TableReservation';
        const localValue = {
          date: "2023-01-21",
          reservation: 156,
          time: "18:00"
        }
        const setLocalItem = (key, value) => {
          window.localStorage.setItem(key, JSON.stringify(value))
        };

        setLocalItem(localKey, localValue);

        expect(localStorage.getItem(localKey)).toEqual(JSON.stringify(localValue));
      }
    );
  }
);

test('should test email input validity.', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const emailInput = screen.getByLabelText(/email/);
  fireEvent.change(emailInput, { target: { val: 
    'exampleexample.com' }});
  expect(validateEmail(emailInput.val)).toBe(false);
  fireEvent.change(emailInput, { target: { val: 
    'example@example.com' }});
  expect(validateEmail(emailInput.val)).toBe(true);
});

test('should test phone input validity.', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const phoneInput = screen.getByLabelText(/phone/);
  fireEvent.change(phoneInput, { target: { val: 
    '012-3456789' }});
  expect(validatePhone(phoneInput.val)).toBe(true);
  fireEvent.change(phoneInput, { target: { val: 
    '1g3-45abcde' }});
  expect(validatePhone(phoneInput.val)).toBe(false);
});

test('should test for first name input validity.', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const firstName = screen.getByLabelText(/firstName/);
  const textRegex = /[a-zA-Z]/;
  
  fireEvent.change(firstName, { target: { val: 
    'david' }});
  expect(textRegex.test(firstName)).toBe(true);

  fireEvent.change(firstName, { target: { val: 
    '1234' }});
  expect(textRegex.test(String(firstName.val))).toBe(false);
});

test('should test for last name input validity.', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const lastName = screen.getByLabelText(/lastName/);
  const textRegex = /[a-zA-Z]{3,15}/;
  
  fireEvent.change(lastName, { target: { val: 
    'david' }});
  expect(textRegex.test(lastName)).toBe(true);

  fireEvent.change(lastName, { target: { val: 
    'a5' }});
  expect(textRegex.test(String(lastName.val))).toBe(false); 
});