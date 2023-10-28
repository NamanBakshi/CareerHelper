import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import homeImg from "../assets/bg.jpg";
import { Input, Typography,Button } from "@material-tailwind/react";
import {motion} from "framer-motion"

const AllJobs=()=>{
    const [jobs,setJobs]=useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{
        fetchJobs();
    },[])

    const fetchJobs=async (req,res)=>{
        try{
        const data=await fetch("https://career-helper-backend.vercel.app/getjobs",{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            mode: 'cors'
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
        <section className="bg-gray-100 min-h-[87vh] pt-8">
            <div
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center items-center w-full min-h-[30vh] mb-10 "
      >
        <Typography className="text-light-blue-500 text-2xl md:text-4xl font-bold mb-5">
          Search Your Dream Job
        </Typography>

        <form className="flex justify-center items-center gap-5">
          <div className=" w-[20rem] md:w-[32rem] relative">
            <Input
              type="text"
              label="Search Job on basis of Title, Company, Location, WorkFrom"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-5 mb-8 ">
          <Button
            variant="text"
            className="bg-white bg-opacity-50 backdrop-blur-md shadow-md"
            size="sm"
            onClick={() => setSearch("Remote")}
          >
            Remote
          </Button>
          
          <Button
            variant="text"
            className="bg-white bg-opacity-50 backdrop-blur-md shadow-md"
            size="sm"
            onClick={() => setSearch("Gurgaon")}
          >
            Gurgaon
          </Button>
          <Button
            variant="text"
            className="bg-white bg-opacity-50 backdrop-blur-md shadow-md"
            size="sm"
            onClick={() => setSearch("SDE")}
          >
            SDE
          </Button>
          <Button
            variant="text"
            className="bg-white bg-opacity-50 backdrop-blur-md shadow-md"
            size="sm"
            onClick={() => setSearch("")}
          >
            All
          </Button>
        </div>

        {search === "" ?
        
        jobs
        .map((job) =>  
           
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
            
            :
            
            jobs.filter((item)=>
                //return (
                item.position.toLowerCase() === (search.toLowerCase()) || 
                item.company.toLowerCase() === (search.toLowerCase()) ||
                item.location.toLowerCase() === (search.toLowerCase()) ||
                item.workfrom.toLowerCase() === search.toLowerCase()
                //)
            ).map((job) => (
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
              )) 
             
              
        }
                
      </div>
        </section>
    )
}

export default AllJobs;
