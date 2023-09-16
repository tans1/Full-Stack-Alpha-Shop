import React from 'react'
import {StyledFooter, SocialMediaAddress,TakeFeedback} from "../styles/home.style"
import {FaFacebookSquare,FaInstagramSquare,FaLinkedin} from 'react-icons/fa';
import { motion } from "framer-motion"


export default function Footer() {
  const container = {
    hidden: { x : -1000},
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        type : "spring",
        stiffness: 100,
        damping: 10,

      }
    }
  }
  
  const item = {
    hidden: { x : -1000},
    show: {
      x: 0,
      transition: {
        
        type : "spring",
        stiffness: 100,
        damping: 10

      }
    }
  }
  return (
    <StyledFooter>
          <SocialMediaAddress>
            <motion.ul
               variants={container}
               initial="hidden"
               animate="show"
            >
              <motion.li
                variants={item}
              ><FaFacebookSquare /><span>facebook</span></motion.li>
              <motion.li
                variants={item}
              ><FaInstagramSquare /><span>instagram</span></motion.li>
              <motion.li
                variants={item}
              ><FaLinkedin /><span>linkedIn</span></motion.li>
            </motion.ul>
          </SocialMediaAddress>
          <TakeFeedback>
            <div >
              <div>email</div>
              <input type="email" placeholder="email" />
            </div>
            <div >
              <div>feedback</div>
              <textarea name="feedback" id="2" cols="30" rows="4"></textarea>
            </div>
            <button>Submit</button>
          </TakeFeedback>
      </StyledFooter>
  )
}
