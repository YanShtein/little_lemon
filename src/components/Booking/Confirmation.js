import { birthdaySvg, anniversarySvg, businessSvg, generalSvg } from "../../assets/svg";

import React from 'react'
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function Confirmation() {
  const { state } = useLocation();
  const { date, firstName, lastName, email, phone, time, occasion, guests, reserveNumber } = state;

  const occasionSvg = (
    occasion === 'Birthday' ? birthdaySvg :
    occasion === 'Anniversary' ? anniversarySvg :
    occasion === 'Business' ? businessSvg :
    generalSvg
  );

  function upperCase(word) {
    const original = [...word];
    return original[0].toUpperCase() + original.slice(1).join('');
  };

  return (
    <>
      <Header />
      <div className="reserve">
        <h2>Table reserved at the Chicago Branch!</h2>
        <p>We have received your reservation with the following information:</p>
        <div className="details">
          <ul>
            <li>Reservation number:</li>
            <li>Name:</li>
            <li>Phone Number:</li>
            <li>Reservation date:</li>
            <li>Reservation time:</li>
            <li>Number of People:</li>
            <li>Occasion:</li>
          </ul>
          <ul>
            <li><b>000-{reserveNumber}-157</b></li>
            <li>{upperCase(firstName)} {upperCase(lastName)}</li>
            <li>{phone}</li>
            <li>{date}</li>
            <li>{time}</li>
            <li>{guests}</li>
            <li>{occasion ? occasion : 'General'} {occasionSvg}</li>
          </ul>
        </div>
        <p>Order details has been sent to: <b><i>{email}</i></b></p>
        <br/>
        <a href="/book"><button>Go Back</button></a>
      </div>
    </>
  )
};
