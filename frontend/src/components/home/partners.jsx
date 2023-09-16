import React from 'react'
import Marquee from "react-fast-marquee";
import chapa from "../../assets/chapa-1.png"
import paypal from "../../assets/paypal.jpg"
import google from "../../assets/google.jpg"
import {StyledMarquee} from "../styles/home.style"

export default function Partners() {
  return (
    <Marquee
      autoFill = {true}
      speed = {40}
      loop={0}
      className='marquee'
    >
      <StyledMarquee>
            <img src={chapa} alt="chapa" />
      </StyledMarquee>
      <StyledMarquee>
            <img src={paypal} alt="chapa" />
      </StyledMarquee>
      <StyledMarquee>
            <img src={google} alt="chapa" />
      </StyledMarquee>
    </Marquee>
  )
}
