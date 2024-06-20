import React from "react";

const Loading = () => {
   return (
      <div className="grid place-content-center min-h-[100vh]">
         <div className="relative w-36 h-36">
            <span className="overlay absolute inset-0 bg-slate-900/65 animate-loading rounded-full"></span>
            <img
               src="https://res.cloudinary.com/dqlgjekue/image/upload/v1716228847/BADRUKA/logo_wwb3e7.webp"
               alt="Loading..."
               width={100}
               height={100}
               loading="lazy"
               className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            />
         </div>
      </div>
   );
};

export default Loading;
