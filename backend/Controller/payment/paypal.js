const paypal = require('paypal-rest-sdk');
require('dotenv').config()

const makePayment = (req, res) => {
    var create_payment_json = {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        redirect_urls: {
          return_url: process.env.Paypal_return_url,
          cancel_url: process.env.Paypal_cancel_url,
        },
        transactions: [
          {
            amount: {
              currency: "USD",
              total: "600.00",
            },
            description: "Your Money cannot be returned for any reason.....",   
          },
        ],
      };
    
      paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          throw error;
        } else {
          for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === "approval_url") {
              res.redirect(payment.links[i].href);
            }
          }
        }
      });

};



const successPayment = async (req,res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        payer_id: payerId,
        transactions: [
        {
            amount: {
            currency: "USD",
            total: "600.00",
            },
        },
        ],
    };
    paypal.payment.execute(paymentId,execute_payment_json,function (error, payment) {
        if (error) {
            throw error;
        } else {
            res.send("success");
        }
        }
    );
}


const cancelPayment = (req,res) => {
    return res.redirect("/pay")
}

module.exports = {
    makePayment,
    successPayment,
    cancelPayment
}