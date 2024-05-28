import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
   return (
      <section
         className=" w-full  black text-white mt-8 tracking-wide py-4"
         id="contact"
      >
         <h2 className="uppercase text-center mt-12 font-bold text-xl gradient">
            contact us
         </h2>
         <div className="container mx-auto flex justify-between flex-col gap-6 md:flex-row pt-14">
            <div className="aboutUs flex-1 px-5">
               <h5>Bankatlal Badruka College for information Technology</h5>
               <p className="text-xs text-justify mt-3 text-slate-200 tracking-wide">
                  Bankatlal Badruka College for Information Technology (BBCIT),
                  named in honour of the founder, was established in 1991 to
                  impart instruction of excellence in IT. The college has been
                  able to carve a niche for itself in the academic world in a
                  short period due to hard work and the dedication of staff.
               </p>
            </div>
            <div className="flex-1 px-5">
               <h5>Faculty Co-ordinators :</h5>
               <div className="mt-3 ">
                  {/* sunny */}

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Ms.D.T Madhavi Latha
                     </p>
                     <p>9550243050</p>
                  </div>
               </div>
            </div>
            <div className="flex-1 px-5">
               <h5>Co-ordinators :</h5>
               <div className="mt-3 ">
                  {/* sunny */}

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Shamstrabrez
                     </p>
                     <p>8886854597</p>
                  </div>

                  {/* bunny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Thrushsar Jain
                     </p>
                     <p>9032812425</p>
                  </div>

                  {/* chinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        CH.Sneha
                     </p>
                     <p>7702696047</p>
                  </div>

                  {/* pinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        M.Rajeev kumar
                     </p>
                     <p>7801078123</p>
                  </div>

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        J.Arthi
                     </p>
                     <p>9640388418</p>
                  </div>

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        D.Navaneeth guptha
                     </p>
                     <p>7995329174</p>
                  </div>

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Vasu kumar
                     </p>
                     <p>6281163105</p>
                  </div>

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Purnachand
                     </p>
                     <p>7386565721</p>
                  </div>
               </div>
            </div>
         </div>

         {/* follow */}
         <div className="follow text-center pt-5  mt-6">
            <div>
               <h6 className="text-base tracking-wide">follow us</h6>
               <div className="flex justify-center items-center gap-10 my-5">
                  <a
                     href="https://www.facebook.com/profile.php?id=100092649845440&mibextid=kFxxJD"
                     aria-label="visit our Facebook"
                  >
                     <FaFacebookF className="text-[#1877F2]" />
                  </a>
                  <a
                     href="https://www.instagram.com/badruka_bbcit?igsh=MTdtaXVsanZsemx6OA=="
                     aria-label="vitsit our Instagram"
                  >
                     <FaInstagram className="text-[#ff6464]" />
                  </a>

                  <a
                     href="https://youtube.com/@BBCIT-Hyderabad?si=415m9t2uBv8mC71J"
                     aria-label="visit our Youtube"
                  >
                     <FaYoutube className="text-[#CD201F]" />
                  </a>
               </div>
            </div>

            <em className="text-xs tracking-widest text-slate-300">
               copyright @ 2024
            </em>
         </div>
      </section>
   );
};

export default Contact;
