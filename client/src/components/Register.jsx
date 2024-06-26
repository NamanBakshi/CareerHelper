import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Logo from "../assets/CHLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { BASE_URL } from "../../link";

const Register=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [message,showMessage]=useState(false)
    const [emailError, setEmailError] = useState(false);
    const navigate=useNavigate();

    const register=async(e)=>{
        e.preventDefault();
    try {
      const body = { name, email, password };
      const response=await fetch(
// <<<<<<< HEAD
//         `https://backend-82wc.onrender.com/register`,
// =======
        "https://career-helper-backend.vercel.app/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
      // .then(resp=>resp.json())
      // .then(resp=>console.log("responosee="+resp))
      // .catch(err=>console.log(err))
       // console.log("response = "+response) //object
        //console.log("parseresponse = "+JSON.parse(response)) //undefined/error
       //const newresp=  await response.json()  
       //console.log("parseNEWresp = "+JSON.parse(newresp))  // object
       //console.log("newresp = "+newresp) // json object

       //console.log("resp = "+JSON.stringify(newresp))

      if (response.status === 409) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }

      if (response.status === 200) {
        showMessage(true);
        setTimeout(() => {
          showMessage(false);
        }, 3000)
        setTimeout(()=>{
          navigate("/login")
        },2000)
        //navigate("/login")
      }
    } catch (err) {
      //console.log("error",err);
    }
  }

    return(
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-100 "
    >
      {message &&
        (toast(" Registered Successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }),
        (<ToastContainer />))}
        <Card color="white" shadow={true} className="items-center p-8 border-2 border-blue-200">
        <Typography variant="h4" color="blue-gray">
          Register To
        </Typography>
        <img src={Logo} alt="Logo" className="w-44" />
        <form
          onSubmit={register}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              color="blue"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              required
            />
            <Input
              color="blue"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              required
            />
            {emailError && (
              <Typography color="red" className="text-[12px]">
                Email already exists!!
              </Typography>
            )}
            <Input
              color="blue"
              value={password}
              onChange={(e) => setPassowrd(e.target.value)}
              type="password"
              label="Password"
              required
            />
          </div>
          <Button color="blue" type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium ml-2 text-blue-500 hover:underline "
            >
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </motion.div>
    )
}

export default Register
