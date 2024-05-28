import React from "react";

const Loading = () => {
   return (
      <div className="flex justify-center items-center bg w-full min-h-[100vh] ">
         <div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 200 200"
               className="w-20 h-20"
            >
               <radialGradient
                  id="a12"
                  cx="66%"
                  fx="66%"
                  cy="31.25%"
                  fy="31.25%"
                  gradientTransform="scale(1.5)"
               >
                  <stop offset="0" stopColor="#0E1317"></stop>
                  <stop offset=".3" stopColor="#0E1317" stopOpacity=".9"></stop>
                  <stop offset=".6" stopColor="#0E1317" stopOpacity=".6"></stop>
                  <stop offset=".8" stopColor="#0E1317" stopOpacity=".3"></stop>
                  <stop offset="1" stopColor="#0E1317" stopOpacity="0"></stop>
               </radialGradient>
               <circle
                  style={{ transformOrigin: "center" }}
                  fill="none"
                  stroke="url(#a12)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray="200 1000"
                  strokeDashoffset="0"
                  cx="100"
                  cy="100"
                  r="70"
               >
                  <animateTransform
                     type="rotate"
                     attributeName="transform"
                     calcMode="spline"
                     dur="2s"
                     values="360;0"
                     keyTimes="0;1"
                     keySplines="0 0 1 1"
                     repeatCount="indefinite"
                  ></animateTransform>
               </circle>
               <circle
                  style={{ transformOrigin: "center" }}
                  fill="none"
                  opacity=".2"
                  stroke="#0E1317"
                  strokeWidth="20"
                  strokeLinecap="round"
                  cx="100"
                  cy="100"
                  r="70"
               ></circle>
            </svg>
            <span className="font-medium tracking-wider text-lg">
               Loading ...
            </span>
         </div>
      </div>
   );
};

export default Loading;
