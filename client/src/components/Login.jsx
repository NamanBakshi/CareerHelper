import { Button, Card,Input,Typography } from "@material-tailwind/react"
import {motion} from "framer-motion"
import Logo from "../assets/CHLogo.png";
import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../Context/userContext";
import { BASE_URL } from "../../link";

const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [emailError, showemailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [message, showMessage] = useState(false);
    const navigate=useNavigate()

    const {setUser}=useContext(UserContext)

    const handleLogin=async (e)=>{
      e.preventDefault()
      try{
        const body={email,password}
        
        const response=await fetch(`https://backend-82wc.onrender.com/login`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json',

          },
          body:JSON.stringify(body),
          credentials:"include"
        })
        const data = await response.json();
        console.log("login data"+JSON.stringify(response))
        
        switch (response.status) {
          case 200:
            
            //cookies.set(data.token)
            console.log("localtoken= "+data.token)
            localStorage.setItem('localtoken',data.token)
            setUser(data);
            //localStorage.setItem('token',data.token)
            showMessage(true);
            setTimeout(() => {
              //setRedirect(true);
              //window.location.href = "/register";
              navigate("/jobs")
            }, 1500);
            break;
          case 401:
            showemailError(true);
            setTimeout(() => {
              showemailError(false);
            }, 2000);
            break;
            case 403:
              showemailError(true);
              setTimeout(() => {
                showemailError(false);
              }, 2000);
              break;  
          case 402:
            setPasswordError(true);
            setTimeout(() => {
              setPasswordError(false);
            }, 2000);
        }
      }catch(err){
        console.log(err)
      }
    }

    return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-[85vh] bg-gray-100"
    >
      {message &&
        (toast("Login Successful!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }),
        (<ToastContainer />))}

        <Card color="white" shadow={true} className="p-8 items-center border-2 border-blue-200">
        <Typography variant="h4" color="blue-gray">
          Login To
        </Typography>
        <img src={Logo} alt="Logo" className="w-44" />
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
            <div className="mb-4 flex flex-col gap-6">
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              color="blue"
            />
            {emailError && (
              <Typography color="red" className="font-thin text-sm">
                Email not found!
              </Typography>
            )}

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              color="blue"
            />
            {passwordError && (
              <Typography color="red" className="font-thin">
                Incorrect Password!
              </Typography>
            )}

            </div>
            <Button color="blue" className="mt-6" fullWidth type="submit">
            Login
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?
            <Link
              to={"/register"}
              className="font-medium ml-2 text-blue-500 hover:underline"
            >
              Register
            </Link>
          </Typography>

        </form>
        </Card>
     </motion.div>   
    )
}

export default Login