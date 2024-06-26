import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

import {
  ArrowLeftIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { BASE_URL } from "../../link";

const JobDetails=()=>{
    const { id } = useParams();
    const [job, setJob] = useState("");

    // const fetchData=async ()=>{
    //     try{
    //         const response=await fetch(`https://career-helper-backend.vercel.app/job/${id}`,{
    //             method:"GET"})
    //         if(response.status === 200){
    //             console.log(JSON.stringify(response))
    //         }else{
    //             console.log(JSON.stringify(response))
    //         }    
    //     }catch(err){
    //         console.log("err in fetchdata= "+err)
    //     }
    // }

    useEffect(() =>{ 
    async function fetchData(){
        try{
            const response=await fetch(`https://backend-82wc.onrender.com/job/${id}`,{
                method:"GET"})
            if(response.status === 200){
                const jsondata=await response.json()
                setJob(jsondata.job)
            }       
        }catch(err){
           // console.log("err in fetchdata= "+err)
        }
    }
        fetchData()
}, [])

      //console.log("job= ")
      //console.log(JSON.stringify(job))
      const date = new Date(job?.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })

    return(
        <div className="flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center bg-blue-gray-50 min-h-[30vh] mb-10 text-black drop-shadow-xl p-5">
        <h2 className="text-xl md:text-4xl text-center font-bold font-heading mb-2">
          {job?.position}
        </h2>
        <p className="text-center text-lg md:text-2xl font-semibold mb-6">
          ( {job?.company})
        </p>
        <div className="flex justify-center items-center md:gap-5 md:flex-row w-full md:w-1/2 ">
          <Typography className="flex items-center my-2">
            <ClockIcon className="w-5 h-5 mr-2" />
            {date}
          </Typography>
          <Typography className="flex items-center my-2">
            <MapPinIcon className="w-5 h-5 mr-2" />
            {job?.location} - {job?.workfrom}
          </Typography>
        </div>
        <Button variant="gradient" color="cyan" className="my-3">
          Apply Now
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex  md:flex-row w-full md:min-h-[72vh] justify-center mb-5"
      >
        <div className="w-[90%] md:w-1/2  px-4">
          <Link to={"/jobs"}>
            <Button
              variant="text"
              className="flex items-center gap-2 bg-blue-gray-50"
            >
              <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" />
              All Jobs
            </Button>
          </Link>
          <Typography variant="h5" className="my-2">
            The Role
          </Typography>
          <Typography variant="paragraph">
            In the world of AI, behavioural predictions are leading the charge
            to better machine learning. There is so much happening in the AI
            space. Advances in the economic sectors have seen automated business
            practices rapidly increasing economic value. While the realm of the
            human sciences has used the power afforded by computational
            capabilities to solve many human based dilemmas. Even the art scene
            has adopted carefully selected ML applications to usher in the
            technological movement. engineering team.
          </Typography>
          <Typography variant="h5" className="mb-2 mt-10">
            Requirments
          </Typography>
          <Typography variant="paragraph">
            In the world of AI, behavioural predictions are leading the charge
            to better machine learning. There is so much happening in the AI
            space. Advances in the economic sectors have seen automated business
            practices rapidly increasing economic value. While the realm of the
            human sciences has used the power afforded by computational
            capabilities to solve many human based dilemmas. Even the art scene
            has adopted carefully selected ML applications to usher in the
            technological movement. engineering team.
          </Typography>
        </div>
      </motion.div>
    </div>  
    )
}

export default JobDetails
