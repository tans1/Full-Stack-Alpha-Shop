import { styled } from "styled-components";

export const Payment_options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 95vh;
    .paypal_option_container{
        text-align: center;
        background-color: white;
        width: 400px;
        height: 400px;
        border: 1px solid black;
        border-radius: 10px;
        margin-right: 100px;

        .paypal_image_container{
            width: 90%;
            height: 50%;
            margin: 10px auto;            
            img{
                width: 100%;
                height: 100%;
            }
        }


        p{
            font-size: 40px;
            font-weight: bold;
        }
        .payment_button{
            width: 100%;
            height: 30%;
            margin-top: 50px;
            button{
                width: 50%;
                height: 50%;
                border: none;
                border-radius: 10px;
                background-color: #000;
                color: #fff;
                font-size: 1.5rem;
                font-weight: bold;
                cursor: pointer;
                &:hover{
                    background-color: #ffffff;
                    color: #000;
                    border: 6px solid #fd02e0;
                }
            }
        }
    }
    .chapa_option_container{
        background-color: white;
        width: 400px;
        height: 400px;

        border: 1px solid black;
        border-radius: 10px;
        text-align: center;


        .chapa_image_container{
            width: 90%;
            height: 50%;
            margin: 10px auto;

            img{
                width: 100%;
                height: 100%;
            }
        }

        p{
            font-size: 40px;
            font-weight: bold;
        }

        
        .payment_button{
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 50%;
                height: 50%;
                border: none;
                border-radius: 10px;
                background-color: #000;
                color: #fff;
                font-size: 1.5rem;
                font-weight: bold;
                cursor: pointer;
                &:hover{
                    background-color: #fff;
                    color: #000;
                    border: 6px solid #fd02e0;
                }
            }
        }
    }

`



export const DeliveryInfo = styled.div`
    height: 670px;
    width: 800px;
    border: 5px solid #fd02e0;
    border-radius: 15px;

    .delivery_address {
        padding: 0 20px;
    }

    .delivery_address p{
        text-align: center;

        color: white;
        font-size: 35px;
        font-weight: bold;
        padding-top: 10px;
    }

    .submitbutton {
        width: 100px;
        height: 50px;
        font-size: 19px;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        background-color: lightgreen;
        margin-top: 15px;
        margin-left: 20px;
    }
`


export const  ManualDeliveryInfo = styled.div`
    height: 442px;
    width: 100%;
    border-radius: 15px;
    /* margin-top: 20px; */
    padding: 0 20px;

    div {
        height: 100px;
        margin-top: 10px;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: bold;
        color: white;
        display:  flex;
        justify-content: flex-start;
    }
    input {


        height: 40px;
        width: 300px;
        outline: none;
        border: none;
        border-radius: 5px;
        font-size: 18px;
    }

    
    `;