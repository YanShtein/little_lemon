import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage, { updateTimes, initializeTimes } from './components/Booking/BookingPage';
import submitForm from './components/Booking/useSubmitForm';

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