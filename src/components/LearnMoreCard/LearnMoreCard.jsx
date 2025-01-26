import Image from "next/image";

import "./style.scss";

const LearnMoreCard = ({ icon }) => {
  return (
    <div className="learnMoreCard">
      <Image src={icon} alt="learn more" />
    </div>
  );
};

export default LearnMoreCard;
