import Image from "next/image";

import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import X from "@/assets/icons/x.svg";
import Github from "@/assets/icons/github.svg";
import Youtube from "@/assets/icons/youtube.svg";

import "./style.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footerNav">
        <ul>
          <li>
            <span>about</span>
          </li>
          <li>
            <span>blog</span>
          </li>
          <li>
            <span>press</span>
          </li>
          <li>
            <span>accessibility</span>
          </li>
          <li>
            <span>partners</span>
          </li>
        </ul>
      </div>
      <div className="footerSocials">
        <ul>
          <li>
            <Image
              src={Facebook}
              alt="facebook"
              className="footerSocialIcons"
            />
          </li>
          <li>
            <Image
              src={Instagram}
              alt="instagram"
              className="footerSocialIcons"
            />
          </li>
          <li>
            <Image src={X} alt="x" className="footerSocialIcons" />
          </li>
          <li>
            <Image src={Github} alt="github" className="footerSocialIcons" />
          </li>
          <li>
            <Image src={Youtube} alt="youtube" className="footerSocialIcons" />
          </li>
        </ul>
      </div>
      <div className="rights">
        <span>© {currentYear} your company, inc. all rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
