import React from "react";
import { Typography, Rating } from "@material-tailwind/react";

const Ratings = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-10">
      <Typography
        color="blue-gray"
        className="mb-10 text-2xl md:text-4xl p-2 border-b-2 border-b-light-blue-700 font-bold"
      >
        What our users are saying
      </Typography>

      <div className="flex flex-wrap justify-center items-center p-5 md:p-0 gap-10">
        {Array(3)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="px-8 text-center max-w-md bg-white shadow bg-opacity-50 border-2 border-blue-300 border-b-2 border-b-blue-300 backdrop-blur-md p-5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-6 font-semibold"
              >
                "I was able to find my dream job in just a few days. Thank
                you"
              </Typography>
              {/* <Avatar
                src="https://avatars.githubusercontent.com/u/86846633?v=4"
                alt="image"
                size="lg"
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-44 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

              <Typography variant="h6" className="mt-4">
                Naman Bakshi
              </Typography>
              <Typography color="gray" className="mb-4 font-normal">
                MERN Stack Developer
              </Typography>
              <Rating value={5} readonly />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ratings;
