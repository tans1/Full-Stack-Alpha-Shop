const request = require('request');
require('dotenv').config()




const makePayment = (req,res) => {
    const amount = req.query.amount;
    var options = {
    'method': 'POST',
    'url': 'https://api.chapa.co/v1/transaction/initialize',
    'headers': {
        'Authorization': `Bearer ${process.env.Chapa_Secret_Key}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "amount": amount,
        "currency": "ETB",
        "email": process.env.Chapa_email,
        "first_name": "Tofik",
        "last_name": "Abdu",
        "phone_number": process.env.Chapa_phone_number,
        "tx_ref": generatetx_ref(10),
        "callback_url": process.env.Chapa_callback_url,
        "return_url": process.env.Chapa_return_url,
        "customization[title]": "alpha Shop",
        "customization[description]": "alpha eCommerce online shop"
    })

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        
        const responseObject = JSON.parse(response.body);
        const redirectionUrl = responseObject.data.checkout_url
        return res.redirect(redirectionUrl)
    });

}


const chapaCallback = (req, res) =>{
    console.log(req.body)
    return res.send('paid successfully')
}




const generatetx_ref = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
  
    return randomString;
}


module.exports = {
    makePayment,
    chapaCallback
}