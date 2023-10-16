import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/CHLogo.png";

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
  } from "@material-tailwind/react";

  import {
    BriefcaseIcon,
    PencilSquareIcon,
    PowerIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/outline";

const Header=()=>{
    const [openNav, setOpenNav] = useState(false);
    const Navigate = useNavigate();

    return (
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-2">
            <div className="flex items-center justify-around text-blue-gray-900">
            <Link to="/">
                <img src={Logo} alt="" className="w-44" />
            </Link>

            <div className="flex items-center gap-4">
            <Link to={"/jobs"}>
                <Button
                  variant="text"
                  className="hidden lg:flex items-center gap-2"
                >
                  <BriefcaseIcon className="h-5 w-5" />
                  Jobs
                </Button>
              </Link>
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
            </div>

            </div>
        </Navbar>
    )
}
export default Header;