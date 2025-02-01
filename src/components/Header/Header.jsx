import Image from "next/image";

import Search from "@/assets/icons/search.svg";
import SearchSymbol from "@/assets/icons/search-symbol.svg";

import Twitter from "@/assets/icons/twitter.svg";
import Telegram from "@/assets/icons/telegram.svg";
import PcIcon from "@/assets/icons/pcIcon.svg";

import "./style.scss";

const Header = ({ handleBurgerToggle, burgerToggleValue }) => {
  return (
    <div className={`header ${burgerToggleValue}`}>
      <div
        className="burgerMenu"
        onClick={() => {
          handleBurgerToggle("burger");
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nemuModal"></div>

      <div className="logo">
        <div className="circle"></div>
        <div className="triangle"></div>
        <div className="rectangle"></div>
        <div className="triangle"></div>
        <div className="circle"></div>
        <div className="white-space"></div>
      </div>

      <div className="search">
        <Image src={Search} alt="search" className="searchIcon" />
        <input type="text" placeholder="search ai agance..." />
        <div className="searchSymbolContainer">
          <Image src={SearchSymbol} alt="symbol" />
          <p>K</p>
        </div>
      </div>
      <div className="socials">
        <Image src={Twitter} alt="twitter" />
        <Image src={Telegram} alt="twitter" />
        <Image src={PcIcon} alt="twitter" />
        <a href="">start buying</a>
      </div>
    </div>
  );
};

export default Header;
