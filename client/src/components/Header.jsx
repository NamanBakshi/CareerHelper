import React, { useState, useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/CHLogo.png";
import { UserContext } from "../Context/userContext";


import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
  } from "@material-tailwind/react";

  import {
    BriefcaseIcon,
    PencilSquareIcon,
    PowerIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/outline";

const Header=()=>{
    const { user, setUser } = useContext(UserContext);
    //const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();

    const fetchUser=async (req,res)=>{
      const response=await fetch("https://career-helper-backend.vercel.app/profile",{
        credentials:"include"
      })
      //console.log("response from /profile= "+response)
      const data= response.json()
      //console.log("data from /profile= "+JSON.stringify(data))
      setUser(data)
    }

    const Logout=async(req,res)=>{
      try{
      const response = await fetch("https://career-helper-backend.vercel.app/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )
      if (response.status === 200) {
        setUser(null);
        navigate("/");
      }
    }catch(Err){
      console.log(Err)
    }
  }
    
    useEffect(()=>{
      fetchUser()
    },[])

    const id=user?.id
    console.log("id= "+id)
    return (
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-2">
            <div className="flex items-center justify-around text-blue-gray-900">
            <Link to="/">
                <img src={Logo} alt="" className="w-44" />
            </Link>

            <div className="flex items-center gap-3">
            {id &&  <Link to={"/addjobs"}>
                <Button
                  variant="text"
                  className="px-3 hidden w-[32] flex items-center gap-2"
                >
                  <PencilSquareIcon className="h-6 w-6" />
                  <Typography className="text-md ">
                  Post Job
                  </Typography>
                  
                  
                </Button>
              </Link>
              }
            <Link to={"/jobs"}>
                <Button
                  variant="text"
                  className="hidden lg:flex items-center gap-2"
                >
                  <BriefcaseIcon className="h-5 w-5" />
                  Jobs
                </Button>
              </Link>

              { id !== undefined ? 
              <Menu placement="bottom-end" className="">
              <MenuHandler className="">
                <Button variant="text" size="sm" className="p-2">
                  {/* <Avatar
                    src={
                      
                      "https://avatars.githubusercontent.com/u/86846633?s=400&u=d1d6d861e9169351b5f04379b63fa6f1ead1b8a1&v=4"
                    }
                    withBorder={true}
                    size="sm"
                    alt="logo"
                    className="p-0.5"
                  /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  onClick={() => navigate(`/profile`)}
                  className="flex items-center gap-2"
                >
                  <UserCircleIcon className="w-5" />
                  Profile
                </MenuItem>

                <MenuItem>
                  <Link to={"/addjobs"} className="flex gap-2">
                   
                    <PencilSquareIcon className="h-5 w-5" />
                    Post a Job
                    
                  </Link>
                </MenuItem>

                <MenuItem
                  onClick={Logout}
                  className="flex items-center gap-2"
                >
                  <PowerIcon className="h-5 w-5" />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
            :
            <>
                          <Link to={"/login"}>
                <Button variant="text" className="hidden lg:inline-block">
                  Login
                </Button>
              </Link>

              <Link to={"/register"}>
                <Button
                  variant="gradient"
                  color="blue"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  Register
                </Button>
              </Link>
              </>
              }



            </div>

            </div>
        </Navbar>
    )
}
export default Header;
