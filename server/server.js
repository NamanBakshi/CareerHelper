const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require( "cookie-parser");

const connectDB = require( "./database/connection.jsx");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const jobRoute = require("./routes/jobRoute");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

connectDB(MONGO_URL)

app.use(
    cors({
<<<<<<< HEAD
      origin: ["https://careerhelp.vercel.app", "https://careerhelp.netlify.app", "http://localhost:5173"], // <-- location of the react app were connecting to
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
=======
      "Access-Control-Allow-Origin": "https://career-helper-frontend.vercel.app", 
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
      mode:"no-cors"
>>>>>>> 66983624229e908583bf4fae0e9c273cc5005bba
    })
  );
  
  app.use(express.json());
  app.use(cookieParser());
  app.use(authRoute,jobRoute,userRoute);


app.listen(PORT, () => {
  //console.log(`CareerHelper Server is Running on ${PORT} `);
});
