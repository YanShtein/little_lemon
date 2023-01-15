import { birthdaySvg, anniversarySvg, businessSvg, generalSvg } from "../../assets/svg";

export default function TableReserved({
  firstName,
  lastName,
  phone,
  people,
  occasion,
  email,
  date,
  time,
}) {

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
          <li><b>000-{Math.floor(Math.random() * 100)}-157</b></li>
          <li>{upperCase(firstName)} {upperCase(lastName)}</li>
          <li>{phone}</li>
          <li>{date}</li>
          <li>{time}</li>
          <li>{people}</li>
          <li>{occasion ? occasion : 'General'} {occasionSvg}</li>
        </ul>
      </div>
      <p>Order details has been sent to: <i>{email}</i></p>
      <br/>
      <button><a href="/book">Go Back</a></button>
    </>
  )
};
