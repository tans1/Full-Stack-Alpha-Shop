const mongoose = require("mongoose");
require('dotenv').config()


try {
    mongoose.connect(process.env.MONGO_CONFIG,
        {
          useNewUrlParser:true,
          useUnifiedTopology:true
        }
      )
    console.log("db connection is successful")
} catch(error) {
    console.log("db connection unsuccessful")
}