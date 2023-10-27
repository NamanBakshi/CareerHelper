import { Card, Input, Typography,Button } from "@material-tailwind/react";
import logo from "../assets/CHLogo.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../link";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

const CreateJob=()=>{
  const { user } = useContext(UserContext);
    const [company,setCompany]=useState("")
    const [location,setLocation]=useState("")
    const [position,setPosition]=useState("")
    const [workfrom,setWorkFrom]=useState("")
    const [Added, setAdded] = useState(false);

    const navigate=useNavigate()

    const handleAddJob=async (e) => {
            e.preventDefault();
            try {
              const body = { company, position, location, workfrom };
              //console.log("body handleaddjob= "+JSON.stringify(body))
              const resp= await fetch(`https://backend-82wc.onrender.com/addjobs`, {
                method: "POST",
                headers: { "Content-Type": "application/json",'Authorization':localStorage.localtoken },
                body: JSON.stringify(body),
                credentials: "include",
                //accesstoken:user.token
                
              })
             
              if(resp.success){
              setAdded(true);
              setTimeout(() => {
                //setAdded(false)
                navigate("/jobs")
                
              }, 2000)
            }else{
              console.log("job post not added")
            }
            
            } catch (err) {
              console.error(err.message);
            }
          }
        

    return (
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
        className="flex justify-center items-center min-h-[83vh] bg-gray-100">
            {Added &&
        (toast(" Job Added Successfully", {
          position: "top-center",
          autoClose: 1000,
        }),
        (<ToastContainer />))}
            <Card color="white" shadow={true} className="p-10 flex justify-center items-center"> 
                <img src={logo} className="w-32"/>
                <Typography variant="h4" color="blue-gray">
          Add a new job
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill in the details of the job you want to add
        </Typography>
        <form onSubmit={handleAddJob}
          className="mt-8 mb-2 w-96">
        <div className="mb-4 flex flex-col gap-6">
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              size="lg"
              label="Company"
              color="blue"
            />
            <Input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              size="lg"
              label="Position"
              color="blue"
            />
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              size="lg"
              label="Location"
              color="blue"
            />
            <Input
              value={workfrom}
              onChange={(e) => setWorkFrom(e.target.value)}
              size="lg"
              label="WorkFrom"
              color="blue"
            />
          </div>
          <Button color="blue" type="submit" className="mt-6" fullWidth>
            Add job
          </Button>
        </form>
        </Card>
        </motion.div>
    )
}
export default CreateJob;