import React,{useState} from 'react'
import {AuthStyled} from "../styles/auth.style";
import "./style.css"
import google from "../../assets/google.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({changeAuth}) {
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

        console.log(formData);
        axios.post("http://localhost:5000/user/local/login",formData)
            .then(res => {
                if (res.data){
                    navigate('/products')
                }
                else {
                    // toast to retry
                }
            })
            .catch(
              err => {
                console.log(err);
              }
            )
      };

      const handleGoogle = async () =>{
        window.location.href = "http://localhost:5000/user/google";    
      }

    const style = {
        width : "100vw",
        height: "100vh",
        display : "flex",
        justifyContent:"center",
        alignItems :"center",
    };
  return (
    <div style={style}>
        <div >
            {
                submitting ? 
                <>
                 <CircularProgress size={100} thickness={4} color='secondary' />
                </>
                :
                <>
                    <AuthStyled  onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='email' name='email' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" placeholder='password' name='password' onChange={handleInputChange} />
                        </div>
                        <button type="submit" >login</button>
                    </AuthStyled>
                    <div className='authOption'>
                        <button onClick={() => handleGoogle()}>
                            <img src={google} alt="google auth" />
                            or use google
                        </button>
                        <span>have no account?</span>
                        <div className='linkk' onClick={()=> changeAuth()}>
                            Register
                        </div>
                    </div>
            </>
                
            }
            
        </div>
    </div>
  )
}

export default Login
