import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { dataStore } from "../context/Store";

const Acknowledgement = () => {
   const { paymentId, details, setAcknowledgement } = useContext(dataStore);
   const { personOneName, personTwoName } = details;

   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });
   const hideAcknowledgement = () => {
      setAcknowledgement(false);
   };

   return (
      <section
         ref={componentRef}
         className="flex justify-start bg-black items-center p-4 m-4 rounded "
      >
         <div className="max-w-[800px] w-[800px] mx-auto shadow-md text-center px-2">
            <h1 className="text-center mt-12 uppercase text-xl md:text-4xl gradient font-medium md:font-semibold tracking-wider border-b-2 border-b-white pb-2 ">
               Acknowledgement
            </h1>
            <p className="mt-7 leading-6 text-slate-100 text-base md:text-lg tracking-wide">
               Thank you,
               <strong className="uppercase italic"> {personOneName} </strong>
               and
               <strong className="uppercase italic"> {personTwoName} </strong>,
               for participating in the Abacus Quiz Contest at Bankatlal Badruka
               College of Information Technology. Payments have been
               successfully received for both entries.Your paymentId is
               <strong> {paymentId} </strong>.
            </p>
            <div className="flex gap-5 justify-center ">
               <button
                  className="mt-9 text-white bg px-6 text-sm md:text-xl tracking-wider shadow-sm border-white border py-1 rounded-md "
                  onClick={handlePrint}
               >
                  Print
               </button>
               <button
                  className="mt-9 text-white  border-solid  px-6 text-sm md:text-xl tracking-wider  py-1 rounded-md shadow-sm bg-black border border-white "
                  onClick={hideAcknowledgement}
               >
                  Back
               </button>
            </div>
         </div>
      </section>
   );
};

export default Acknowledgement;
