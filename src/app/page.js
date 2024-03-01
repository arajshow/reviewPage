'use client'
import {useState} from "react"
import { FaThumbsDown, FaThumbsUp, FaGithub, FaLinkedin, FaInstagram, FaLink } from "react-icons/fa";
import ReviewStar from "./Components/ReviewStar";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";


export default function Home() {

  const [downThumb, setDownThumb] = useState(false);
  const [upThumb, setUpThumb] = useState(false);
  const downCall = () => {
              setDownThumb(true);
              setUpThumb(false);
            }

  const upCall = () => {
              setUpThumb(true);
              setDownThumb(false);
            }
  
  return (
      <div className="my-[5vh] flex flex-col gap-[5vh] sm:w-[80%] sm:ml-[25%] w-[90%] mx-auto items-center">
        <p className="w-full text-[2.6em] font-bold">Leave a review</p>

        <div className="w-full flex flex-col gap-[3vh] hover:sacle-95 transition-all duration-200">
          <ReviewStar
          heading= {"Safty"}
          description = {"product is healthy and safe for use"}
          />

          <ReviewStar
          heading= {"Communication"}
          description = {"improved my confidence to communicate"}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="md:text-4xl text-[1.8em] font-bold">Would you recommend trausti?</p>
          <p className="text-md text-stone-500">Feel free to answer</p>
          <div className="text-5xl flex gap-[5%] mt-6">
            <div onClick={downCall } className={`transition-all duration-200 flex flex-row gap-3 items-center cursor-pointer  ${downThumb ? "text-green-600" : "text-stone-400" }`}>
              <FaThumbsDown  />
              <div className=" text-2xl">No</div>
            </div>
            <div  onClick={ upCall } className={`transition-all duration-200 flex flex-row gap-3 items-center cursor-pointer ${upThumb ? "text-green-600" : "text-stone-400" }`}>
              <FaThumbsUp   />
              <div className=" text-2xl">Yes</div>
            </div>
            
            
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-[3vh] text-xl">
          <FaGithub className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://github.com/arajshow", '_blank')} />
          <FaLinkedin className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://www.linkedin.com/in/arajshow/", '_blank')} />
          <FaLink className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://drive.google.com/file/d/1Tm-7WBovD5tYuF-xYWFOEuRar731XE42/view?usp=sharing", '_blank')} />
          <SiLeetcode className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://leetcode.com/arajshow/", '_blank')} />
          <SiGeeksforgeeks className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://auth.geeksforgeeks.org/user/arajshow", '_blank')} />
          <FaInstagram className="w-1/4 text-[1.5em] cursor-pointer hover:scale-105 transition-all duration-200" onClick={() => window.open("https://www.instagram.com/arajshow/", '_blank')} />
        </div>
      </div>
  );
}
