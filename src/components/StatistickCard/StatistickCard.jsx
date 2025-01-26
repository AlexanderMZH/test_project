import Image from "next/image";

import "./style.scss";

const StatistickCard = ({ header, quantity, icon }) => {
  return (
    <div className="statistickCard">
      <div className="statCardName">
        <div className="dot"></div>
        <span>{header}</span>
      </div>
      <div className="total">
        {icon ? <Image src={icon} alt="users" /> : ""}

        <h2>{quantity}</h2>
      </div>
    </div>
  );
};

export default StatistickCard;
