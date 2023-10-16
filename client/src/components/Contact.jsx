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
  // const [inname,setinname]=useState("")
  // const [inemail,setinemail]=useState("")
  // const [inmess,setinmess]=useState("")

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_iybp9sm",
//         "template_1dnr4w1",
//         e.target,
//         "4i6NhRQVTAgwoBcc9"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//     showMessage(true);
//   };
const submit=()=>{
    if(!values.email || !values.mess || !values.name) return (alert("enter all details"))
    setValues({
      name:"",
      mess:"",
      email:""
    })
    return (
        showMessage(!message)
    )
    
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
                  onChange={(e)=>setValues({name:e.target.value})}
                  required
                />
              </div>
              <div className="mb-6">
                <Input
                  type="email"
                  name="email"
                  label="Enter Your Email"
                  value={values.email}
                  onChange={(e)=>setValues({email:e.target.value})}
                  required
                />
              </div>
              <div className="mb-6">
                <Textarea
                  rows="6"
                  name="message"
                  label="Enter Message"
                  value={values.mess}
                  onChange={(e)=>setValues({mess:e.target.value})}
                  required
                />
              </div>
              <div>
                <Button variant="gradient" onClick={submit} fullWidth>
                  Send Message
                </Button>
                {/* <div>
                  {message ? (
                    <p className="text-green-500 text-center mt-2">
                      Message Sent Successfully
                    </p>
                  ) : null}
                </div> */}
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
