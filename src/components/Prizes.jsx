import React from "react";
import { FaAward } from "react-icons/fa6";
import { tophy } from "../images/images.jsx";

const Prizes = () => {
   return (
      <>
         <section className=" flex flex-col">
            <div className=" container mx-auto px-4 text-white mt-16">
               <h2 className="text-center uppercase tracking-wide text-2xl textBlack font-semibold">
                  target subjects
               </h2>
               <p className="text-center uppercase text-base mt-6">
                  dbms , html , c , mobile application , java , computer
                  fundamentals , h/w peripherals , python.
               </p>
               <h2 className="text-center uppercase tracking-wide text-2xl textBlack font-semibold mt-8">
                  prizes
               </h2>
               <p className="text-center text-base mt-6 ">
                  Winning team gets laxminivas badruka rolling trophy , master
                  minds-2024 and exciting prizes. Three finalists and four
                  runners-up of semifinal will also get exciting prizes.
               </p>
            </div>
            <div className="px-4 gap-5 black text-white flex  w-full justify-around items-center  mt-16 h-52">
               <div className="w-32 h-32  flex justify-center items-center shadow-lg bg rounded-md">
                  <div className=" bg-[#0e1317] p-6 rounded-md">
                     <FaAward size={30} className="gold" />
                  </div>
               </div>
               <div className="w-32 h-32  flex justify-center items-center shadow-lg bg rounded-md overflow-hidden">
                  <img
                     width={128}
                     height={128}
                     src={tophy}
                     alt="prize"
                     className="shrink-0 w-16 drop-shadow-md "
                  />
               </div>
               <div className="w-32 h-32  flex justify-center items-center shadow-lg bg rounded-md">
                  <div className=" bg-[#0e1317] p-6 rounded-md">
                     <FaAward size={30} className="gold" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Prizes;
