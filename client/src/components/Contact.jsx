//import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import contactimg from "../assets/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, showMessage] = useState(false);
  const [values,setValues]=useState({
    name:"",
    email:"",
    mess:""
  })
 
const submitonclick=()=>{
    if(!values.email || !values.mess || !values.name) return (alert("enter all details"))
    setValues({
      name:"",
      mess:"",
      email:""
    })
    setTimeout(()=>{
      showMessage(false)
    },2000)
    showMessage(true)

}

  return (
    <div className="min-h-[84vh] w-full flex flex-col justify-center items-center">
      <Typography
        color="blue-gray"
        className="mb-10 text-2xl md:text-4xl p-2 border-b-2 border-b-light-blue-700 font-bold"
      >
        Contact Us
      </Typography>
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[70%] items-center justify-around">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] lg:w-[500px] "
        >
            {message &&
        (toast(" Message Sent Successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }),
        (<ToastContainer />))}
          <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
            <form>
              <div className="mb-6">
                <Input
                  type="text"
                  name="name"
                  label="Enter Your Name"
                  value={values.name}
                  onChange={(e)=>setValues({...values,name:e.target.value})}
                  required
                  color="blue"
                />
              </div>
              <div className="mb-6">
                <Input
                  type="email"
                  name="email"
                  label="Enter Your Email"
                  value={values.email}
                  onChange={(e)=>setValues({...values,email:e.target.value})}
                  required
                  color="blue"
                />
              </div>
              <div className="mb-6">
                <Textarea
                  rows="6"
                  name="message"
                  label="Enter Message"
                  value={values.mess}
                  onChange={(e)=>setValues({...values,mess:e.target.value})}
                  required
                  color="blue"
                />
              </div>
              <div>
                <Button color="blue" variant="gradient" onClick={submitonclick} fullWidth>
                  Send Message
                </Button>
                
              </div>
            </form>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[500px] lg-max:hidden"
        >
          <img src={contactimg} alt="contactimg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
