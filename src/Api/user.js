const user = async (details, setErrors) => {
   try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/user`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ details }),
      });
      const response = await res.json();

      const newErrors = {};
      if (response.personOneRollNumber) {
         newErrors.personOneRollNumberError = response.personOneRollNumber;
      }
      if (response.personTwoRollNumber) {
         newErrors.personTwoRollNumberError = response.personTwoRollNumber;
      }

      setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
      return response;
   } catch (error) {
      console.error("Failed to get registration information", error);
   }
};

export default user;
