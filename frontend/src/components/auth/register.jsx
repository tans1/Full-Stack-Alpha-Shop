import React,{useState} from 'react'
import {AuthStyled} from "../styles/auth.style";
import "./style.css"
import google from "../../assets/google.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";


function Register({changeAuth}) {
    const [submitting, setSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password1: '',
        password2: '',
        phoneNumber: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const data = {
            name : formData["name"],
            email: formData["email"],
            phone_number: formData['phoneNumber'],
            password : formData["password1"]
            
        }
        axios.post("http://localhost:5000/user/local/signup",data)
            .then(res => {
                if (res.data){
                    // toast to login
                    changeAuth();
                }
                else {
                    // toast to retry
                }
            })
      };

    const style = {
        width : "100vw",
        height: "100vh",
        display : "flex",
        justifyContent:"center",
        alignItems :"center"

    };
  return (
    <div style={style}>
        <div >
            {
                submitting ? 
                <>
                    <CircularProgress size={100} thickness={4} color='secondary' />
                </>:
                <>
                    <AuthStyled onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='email' name='email' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">phone number</label>
                            <input type="text" placeholder='phone number' name='phoneNumber' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" placeholder='name' name='name' />
                        </div>
                        <div>
                            <label htmlFor="password1">password</label>
                            <input type="password" placeholder='password' name='password1' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="password2">confirm password</label>
                            <input type="password" placeholder='confirm password' name='password2' onChange={handleInputChange} />
                        </div>

                        <button type="submit">register</button>
                    </AuthStyled>
                    <div className='authOption'>
                        <button>
                            <img src={google} alt="google auth" />
                            or use google
                        </button>
                        <span>already have an account?</span>
                        <div className='linkk' onClick={()=> changeAuth()}>
                            Login
                        </div>
                    </div>
                </>
            }
            
        </div>
    </div>
  )
}

export default Register
