import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage, { updateTimes, initializeTimes } from './components/Booking/BookingPage';

test('Text exists in BookingForm page', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose date/i);
  expect(linkElement).toBeInTheDocument();
});

describe(
  'initializeTimes',
  () => {
    it(
      'should return the initial array',
      () => {
        expect(initializeTimes).toBeInstanceOf(Array);
        expect(initializeTimes).toEqual([
          '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00',
        ])
      }
    );
  }
);

describe(
  'updateTimes', 
  () => {
    it(
      'should return correct available times for action type 05',
      () => {
        const action = { type: '05' };
        const availableTimes = updateTimes([], action);
        expect(availableTimes).toContain('16:00');
      }
    );
  }
);