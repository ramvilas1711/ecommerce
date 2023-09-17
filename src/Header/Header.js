import React, { useState } from "react";
import styled from "styled-components";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaFacebookF } from "react-icons/lia";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "../NavBar/Nav";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderSection>
      <div className="parentDiv">
        <div className="loginSection">
          <div className="DeliveryIcon">
            <CiDeliveryTruck className="truck" />
            <span>Free Delivery</span>
            <span>|</span>
            <span>Return Policy</span>
          </div>
          <div className="SocialIcon">
            <span>Login</span>
            <span>Follow US</span>
            <LiaFacebookF />
            <AiFillLinkedin />
            <BiLogoTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="ShopkartLogo">
          <div className="ShopkartLogoSection">
            <span className="shopkart">ShopKart</span>
            <div className="wishlist">
              <span>WISHLIST(0)</span>
              <span>BAG(0)</span>
            </div>
            <GiHamburgerMenu className="hamburger" onClick={toggleMobileMenu} />
          </div>
        </div>

        <div className="horizontalLineSection">
          <div className="horizontalLine"></div>
        </div>
        {isMobileMenuOpen && <HamburgerMenu />}
        <div className="navSection">
          <div className="nav">
            <Nav />
          </div>
        </div>

        <div className="YearSection">
          <div className="yearNumber">
            <div className="resizingyear">
              <span className="Fresh">Fresh</span>
              <div className="year">
                <span>2022</span>
              </div>
              <span className="Look">Look</span>
            </div>
          </div>
          <div className="boyposter"> </div>

          <img src="../photo/Star3.png" className="star" />
          <img src="../photo/jessica.png" className="boy" />
        </div>
      </div>
      <div className="horizontalLineSectionstar">
        <div className="horizontalLineStar"></div>
      </div>
      <div className="seemore">
        <span>See more</span>
        <FiArrowUpRight className="uparrow" />
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  max-width: 1400px;
  background-color: #1a1a1a;

  .parentDiv {
    width: 100%;
    min-height: 100vh;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  .loginSection {
    display: flex;
    align-items: center;
    height: 6vh;
    justify-content: space-between;
  }
  .truck {
    font-size: 1.5rem;
    color: #626262;
  }
  .DeliveryIcon {
    width: 50%;
    color: white;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-left: 20px;
    color: #626262;
  }
  .SocialIcon {
    width: 50%;
    color: white;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-right: 20px;
    color: #626262;
  }

  .ShopkartLogo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .shopkart {
    font-weight: 275;
    font-size: 40px;
    color: white;
  }

  .ShopkartLogoSection {
    width: 90vw;
    display: flex;
    justify-content: space-between;
  }
  .wishlist {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 400;
    gap: 20px;
  }
  .horizontalLineSection {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .horizontalLine {
    width: 90vw;
    height: 2px;
    background-color: #ffffff;
  }
  .navSection {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .nav {
    width: 70vw;
    display: flex;
  }
  .resizingyear {
    margin-top: 3rem;
  }
  .YearSection {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 5rem;
  }

  .yearNumber {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 50%;
  }
  .Fresh,
  .Look {
    font-weight: 800;
    font-size: 7rem;
    color: white;
    line-height: 0.5;
  }
  .year {
    z-index: 1;
    width: 50vw;
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 8rem;
    -webkit-text-stroke: 1px white;
    color: #f07e15;
  }
  .boyposter {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    height: 50vh;
    background-color: #f07e15;
  }
  .star {
    position: absolute;
    right: 100px;
  }
  .boy {
    position: absolute;
    right: 100px;
    height: 78.5vh;
  }
  .seemore {
    position: relative;
    color: white;
    padding: 20px 30px;
    font-size: 18px;
    cursor: pointer;
  }
  .uparrow {
    margin-left: 10px;
  }
  .horizontalLineSectionstar {
    position: absolute;
    top: 37rem;
  }
  .horizontalLineStar {
    width: 75vw;
    height: 2px;
    background-color: #ffffff;
  }

  @media (max-width: 576px) {
    .hamburger {
      display: flex;
      font-size: 2rem;
      color: white;
      position: absolute;
      right: 20px;
    }

    .mobileMenu {
      display: flex;
      flex-direction: column;
      padding: 20px;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      z-index: 100;
    }

    .ShopkartLogo {
      margin-top: 1rem;
    }

    .parentDiv {
      min-height: 60vh;
    }

    .DeliveryIcon {
      gap: 5px;
      margin-left: 5px;
    }
    .SocialIcon {
      gap: 5px;
      margin-right: 5px;
    }
    .wishlist {
      display: none;
    }
    .nav {
      display: none;
    }
    .shopkart {
      font-size: 30px;
    }
    .hamburger {
      display: flex;
      font-size: 2rem;
      color: white;
    }
    .YearSection {
      margin-left: 0.5rem;
    }
    .Fresh,
    .Look {
      font-size: 3rem;
      line-height: 0.1;
    }
    .year {
      font-size: 3rem;
    }
    .star {
      right: 10px;
      width: 10rem;
    }
    .boy {
      right: 10px;
      height: 50vh;
    }
    .boyposter {
      position: relative;
      width: 100%;
    }
    .seemore {
      padding: 10px 10px;
    }
    .uparrow {
      margin-left: 5px;
    }
    .horizontalLineSectionstar {
      top: 25rem;
    }
    .horizontalLineStar {
      width: 45vw;
      height: 2px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
  }
`;

export default Header;
