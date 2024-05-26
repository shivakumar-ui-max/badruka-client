const registration = async (details, response) => {
   try {
      const res = await fetch(
         `${import.meta.env.VITE_BASE_URL}/auth/registration`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               details: details,
               response: response,
            }),
         }
      );
      const data = await res.json();
      if (data.ok) {
         console.log("ok");
      }
   } catch (error) {
      console.log(error);
   }
};

export default registration;
