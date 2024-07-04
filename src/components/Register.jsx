import React, { useContext, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { dataStore } from "../context/Store";
import payment from "../Api/payment";
import user from "../Api/user";
import Loading from "./Loading";

const Register = () => {
   const {
      details,
      setDetails,
      errors,
      setErrors,
      setPaymentId,
      setAcknowledgement,
      loading,
      setLoading,
   } = useContext(dataStore);

   const {
      personOneName,
      personTwoName,
      collegeName,
      group,
      year,
      personOneRollNumber,
      personTwoRollNumber,
      amount,
   } = details;

   const validateForm = (currentDetails) => {
      const newErrors = {
         personOneNameError: "",
         personTwoNameError: "",
         collegeNameError: "",
         groupError: "",
         yearError: "",
         personOneRollNumberError: "",
         personTwoRollNumberError: "",
         amountError: "",
      };

      if (currentDetails.personOneName.trim() === "") {
         newErrors.personOneNameError = "name is required";
      } else if (currentDetails.personOneName.trim().length < 4) {
         newErrors.personOneNameError = "name must be at least 4 characters";
      }

      if (currentDetails.personTwoName.trim() === "") {
         newErrors.personTwoNameError = "name is required";
      } else if (currentDetails.personTwoName.trim().length < 4) {
         newErrors.personTwoNameError = "name must be at least 4 characters";
      }

      if (currentDetails.collegeName.trim() === "") {
         newErrors.collegeNameError = "College Name is required";
      } else if (currentDetails.collegeName.trim().length < 8) {
         newErrors.collegeNameError =
            "College Name must be at least 8 characters";
      }

      if (currentDetails.group.trim() === "") {
         newErrors.groupError = "Group is required";
      } else if (currentDetails.group.trim().length < 3) {
         newErrors.groupError = "Group must be at least 3 characters";
      }

      if (currentDetails.year.trim() === "") {
         newErrors.yearError = "Year is required";
      } else if (currentDetails.year.trim().length < 3) {
         newErrors.yearError = "Year must be at least 3 characters";
      }

      if (currentDetails.personOneRollNumber.trim() === "") {
         newErrors.personOneRollNumberError = "Roll Number is required";
      } else if (!/^\d{2,15}$/gm.test(currentDetails.personOneRollNumber)) {
         newErrors.personOneRollNumberError = "Roll Number must be a number";
      } else if (currentDetails.personOneRollNumber.trim().length < 8) {
         newErrors.personOneRollNumberError =
            "Roll Number must be at least 8 characters";
      }

      if (currentDetails.personTwoRollNumber.trim() === "") {
         newErrors.personTwoRollNumberError = "Roll Number is required";
      } else if (!/^\d{2,15}$/gm.test(currentDetails.personTwoRollNumber)) {
         newErrors.personTwoRollNumberError = "Roll Number must be a number";
      } else if (currentDetails.personTwoRollNumber.trim().length < 8) {
         newErrors.personTwoRollNumberError =
            "Roll Number must be at least 8 characters";
      } else if (
         currentDetails.personOneRollNumber ===
         currentDetails.personTwoRollNumber
      ) {
         newErrors.personTwoRollNumberError = "Roll number must be unique";
      }

      if (
         parseInt(currentDetails.amount.trim()) <= 0 ||
         parseInt(currentDetails.amount.trim()) > 100
      ) {
         newErrors.amountError = "ammount must be between 1 and 100";
      } else if (!/^\d+$/.test(currentDetails.amount)) {
         newErrors.amountError = "ammount must be a number";
      }

      setErrors(newErrors);
      return Object.values(newErrors).every((error) => error === "");
   };

   const handleChange = (e) => {
      const newDetails = { ...details, [e.target.name]: e.target.value };
      setDetails(newDetails);
      validateForm(newDetails);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const isValid = validateForm(details);

      if (isValid) {
         const userDetailsUpdated = await user(details, setErrors);
         if (userDetailsUpdated.noError) {
            await payment(
               details,
               setPaymentId,
               setAcknowledgement,
               setLoading
            );
         }
      }
   };

   return (
      <section id="register" className="">
         <form
            onSubmit={handleSubmit}
            className="max-w-[800px] mx-auto p-8 flex flex-col justify-between mt-[15vh]"
         >
            <h2 className="flex justify-start md:justify-center gap-2 items-center uppercase font-medium ml-2 md:font-semibold text-xl md:text-2xl italic text-white tracking-wider">
               Registration <BsArrowDownShort />
            </h2>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="person 1 name "
                  name="personOneName"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-5 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={personOneName}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.personOneNameError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="person 2 name "
                  name="personTwoName"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-5 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={personTwoName}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.personTwoNameError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="College Name"
                  name="collegeName"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={collegeName}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.collegeNameError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="Group"
                  name="group"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={group}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.groupError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="Year"
                  name="year"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={year}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.yearError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="person 1 rollNumber..."
                  name="personOneRollNumber"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={personOneRollNumber}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.personOneRollNumberError}
               </span>
            </div>
            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="person 2 rollNumber..."
                  name="personTwoRollNumber"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={personTwoRollNumber}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.personTwoRollNumberError}
               </span>
            </div>

            <div className="flex flex-col gap-y-2 justify-start">
               <input
                  type="text"
                  autoComplete="off"
                  placeholder="amount"
                  name="amount"
                  className="placeholder:bg-transparent bg-transparent border-b-2 border-solid p-3 rounded-md mt-9 outline-none focus:outline-none shadow-sm text-white capitalize placeholder:italic placeholder:text-slate-300 placeholder:tracking-wide"
                  value={amount}
                  onChange={handleChange}
               />
               <span className="text-sm text-red-500 font-normal">
                  {errors.amountError}
               </span>
            </div>
            <button
               type="submit"
               className="mt-9 uppercase tracking-wider text-xl text-white border-2 shadow-md py-2 rounded-md flex justify-center items-center gap-2 bg-[rgba(0,0,0,0.690)]"
            >
               {loading ? (
                  "Loading..."
               ) : (
                  <>
                     submit
                     <RiArrowRightSLine />
                  </>
               )}
            </button>
         </form>
      </section>
   );
};

export default Register;
