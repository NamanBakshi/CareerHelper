import React, { useContext } from "react";
import { UserContext } from "../Context/userContext";
//import { Loader } from "./Loader";

const UserProfile = () => {
  const { user } = useContext(UserContext);

//   if (!user) {
//     return <Loader />;
//   }
 console.log("user= "+JSON.stringify(user))
  return (
    <div className="flex flex-col items-center justify-center min-h-[83vh] bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-300 min-h-[40vh] w-[50vh] mb-10 text-black drop-shadow-xl p-5">
        {/* <img
          src={"https://avatars.githubusercontent.com/u/86846633?v=4"}
          loading="lazy"
          alt={user?.name}
          className="absolute -top-10 w-32 h-32 rounded-full border-4 border-white"
        /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <p className="text-lg text-center mt-5 mb-2">
          Name: <p className="inline">{user?.name} </p>
        </p>
        <p className="text-center text-lg md:text-xl  mb-6">
          Email: {user?.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
