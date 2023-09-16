const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// routes
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/user");
const protectedRoute = require("./routes/protected");
const paymentRoute = require("./routes/payment/payment");

require("dotenv").config();
require("./config/db");
require("./config/paypal");

//jwt
require("./middleware/google");
require("./middleware/jwt");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(cookieParser("cookie secret"));
app.use(passport.initialize());

app.use(bodyParser.json());

// route
app.use("/products", productsRoute);
app.use("/user", userRoute);
app.use("/protected", protectedRoute);
app.use("/payment", paymentRoute);


// Global middleware
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message
  });
});


app.listen(5000);
