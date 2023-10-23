import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import homeImg from "../assets/bg.jpg";
import { Typography } from "@material-tailwind/react";


const AllJobs=()=>{
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetchJobs();
    },[])

    const fetchJobs=async (req,res)=>{
        try{
        const data=await fetch("http://localhost:5173/getjobs",{
            method:"GET",
            // headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            //   }
        })
        //console.log("data from getjobs= "+data)
        const jsonData = await data.json();
        console.log ("json data= "+JSON.stringify(jsonData))
        if(jsonData.success){
            setJobs(jsonData.jobs)

        }else{
            console.log("couldnt get jobs")
        }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <section className="bg-gray-100 min-h-[87vh] pt-12">
            <div
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center items-center w-full min-h-[30vh] mb-10"
      >
         <Typography className="text-light-blue-500 text-2xl md:text-4xl font-bold my-5">
          Search Your Dream Job
        </Typography>

        {jobs.map((job) => (
              <JobCard
                key={job._id}
                company= {job.company}
                position= {job.position}
                location= {job.location}
                workfrom= {job.workfrom}
                id= {job._id}
                author= {job?.author}
                updatedAt={job?.updatedAt}
              />
            )
        )}        
      </div>
        </section>
    )
}

export default AllJobs;