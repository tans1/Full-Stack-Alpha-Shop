import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import {StyledText} from '../styles/common.style'

function TypeWrite() {
    const words = [
        "Unrivaled Variety",
        "Quality Assurance",
        "User-Friendly Interface",
        "Secure Shopping",
        "Swift Delivery"
    ]
  return (
    <StyledText size={"80px"} color={"yellow"}>
      <Typewriter 
        words={words}
        loop={false}
        cursor
        cursorStyle='|'
        typeSpeed={60}
        deleteSpeed={60}
        delaySpeed={3000}
      />
    </StyledText>
  )
}

export default TypeWrite
