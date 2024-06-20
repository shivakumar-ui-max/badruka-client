import React, { createContext, useState } from "react";
export const dataStore = createContext();
const Store = ({ children }) => {
   const [details, setDetails] = useState({
      personOneName: "",
      personTwoName: "",
      collegeName: "",
      group: "",
      year: "",
      personOneRollNumber: "",
      personTwoRollNumber: "",
      amount: "",
   });
   const [errors, setErrors] = useState({
      personOneNameError: "",
      personTwoNameError: "",
      collegeNameError: "",
      groupError: "",
      yearError: "",
      personOneRollNumberError: "",
      personTwoRollNumberError: "",
      amountError: "",
   });

   const [show, setShow] = useState(false);
   const [acknowledgement, setAcknowledgement] = useState(false);
   const [paymentId, setPaymentId] = useState("");
   const [register, setRegister] = useState(null);
   const [loading, setLoading] = useState(false);
   return (
      <>
         <dataStore.Provider
            value={{
               show,
               setShow,
               details,
               setDetails,
               acknowledgement,
               setAcknowledgement,
               errors,
               setErrors,
               paymentId,
               setPaymentId,
               register,
               setRegister,
               loading,
               setLoading,
            }}
         >
            {children}
         </dataStore.Provider>
      </>
   );
};

export default Store;
