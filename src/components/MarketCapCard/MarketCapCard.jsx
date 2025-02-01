import Image from "next/image";

import "./style.scss";

const HottestCard = ({
  icon,
  backgroundColor,
  tickIcon,
  name,
  capShifts,
  price,
  volume,
  marketDynamics,
  isBig,
}) => {
  const boxStyle = {
    width: isBig ? "300px" : "230px",
    height: isBig ? "200px" : "170px",
    backgroundColor: backgroundColor + "!important",
  };
  const marketCapBoxStyle = {
    width: isBig ? "300px" : "230px",
    height: "100px",
  };

  const marketDynamicColor = {
    color: marketDynamics === "up" ? "rgb(0, 184, 0)" : "red",
  };
  const marketDynamicIcon =
    marketDynamics === "up"
      ? {
          width: "0",
          height: "0",
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderBottom: "10px solid rgb(0, 184, 0)",
          marginRight: "5px",
        }
      : marketDynamics === "down"
      ? {
          width: "0",
          height: "0",
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: "10px solid red",
          marginRight: "5px",
        }
      : null;

  return (
    <div className="marketCapContainer">
      <div className="marketCapBox" style={boxStyle}>
        {icon ? <Image src={icon} alt="icon" className="CapIconImage" /> : null}
        {tickIcon && isBig ? (
          <Image src={tickIcon} alt="vector" className="vector" />
        ) : null}
      </div>
      <div className="marketCapStat" style={marketCapBoxStyle}>
        <div className="virtual">
          <div className="virtualNameContainer">
            <h4>{name}</h4>
            {tickIcon && isBig === false ? (
              <Image src={tickIcon} alt="vector" className="vector" />
            ) : null}
          </div>

          <div className="virtualText">
            <span>price</span>
            <span>{price}</span>
          </div>
        </div>
        <div className="percentageContainer">
          <div className="percentage" style={marketDynamicColor}>
            <div className="percentageTriangle" style={marketDynamicIcon}></div>
            <span>{capShifts}</span>
          </div>

          <div className="percentageText">
            <span>market cap</span>
            <span>{volume}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HottestCard;
