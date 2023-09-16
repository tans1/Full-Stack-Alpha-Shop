import React from 'react'
import {StyledText} from '../styles/common.style'
import { Typewriter } from 'react-simple-typewriter';

export default function Feedbacks() {
  return (
    <div className='feedbacks__container'>
        <StyledText  size={"80px"} color={"yellow"} >
            <Typewriter 
            words={["Feedbacks"]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={60}
            delaySpeed={3000}
        />
        </StyledText>
    <div className='feedbacks-list'>
      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>


      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>

      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>

      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>

      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>

      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>


      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>

      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>


      <div className='single_feedback'>
        <div className='feedback'>
            <div className='feedback_user'>
                {/* <img src={logo} alt="user" /> */}
            </div>
            <div className='feedback_content'>
                <span>Merry J.</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, similique?</p>
            </div>
        </div>
      </div>




    </div>
  
    </div>
    
  
  )
}
