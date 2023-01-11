import { birthdaySvg, anniversarySvg, businessSvg, generalSvg } from "../../assets/svg";

export default function TableReserved({
  firstName,
  lastName,
  phone,
  sitting,
  startDate,
  people,
  occasion,
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
          <li>Name:</li>
          <li>Phone Number:</li>
          <li>Indoor/Outdoor:</li>
          <li>Reservation date:</li>
          <li>Reservation time:</li>
          <li>Number of People:</li>
          <li>Occasion:</li>
        </ul>
        <ul>
          <li>{upperCase(firstName)} {upperCase(lastName)}</li>
          <li>{phone}</li>
          <li>{sitting}</li>
          <li>{startDate.getMonth()+1}/{startDate.getDate()}/{startDate.getFullYear()}</li>
          <li>{startDate.getHours()}:{startDate.getMinutes()}</li>
          <li>{people}</li>
          <li>{occasion ? occasion : 'General'} {occasionSvg}</li>
        </ul>
      </div>
      <button><a href="/book">Go Back</a></button>
    </>
  )
};
