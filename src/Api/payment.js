import registration from "./registeration.db";

const payment = async (details, setPaymentId, setAcknowledgement) => {
   const { personOneName, personTwoName, amount } = details;
   try {
      const response = await fetch(
         `${import.meta.env.VITE_BASE_URL}/api/payment`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               personOneName,
               personTwoName,
               amount,
            }),
         }
      );
      const data = await response.json();
      if (!data) {
         console.log("Failed to create payment");
      }

      const options = {
         key: `${import.meta.env.VITE_KEY_ID}`,
         amount: data.amount,
         currency: "INR",
         order_id: data.id,
         handler: function (response) {
            // console.log("response", response);
            registration(details, response);
            const { razorpay_payment_id, razorpay_order_id } = response;

            setPaymentId(razorpay_payment_id);
            setAcknowledgement(true);

            fetch(`${import.meta.env.VITE_BASE_URL}/api/verify-payment`, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  payment_id: razorpay_payment_id,
                  order_id: razorpay_order_id,
               }),
            });
         },
         notes: {
            name: data.notes.personOneName + " " + data.notes.personTwoName,
         },
         theme: {
            color: "#6b51b1",
         },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
   } catch (error) {
      console.log(error.message);
   }
};

export default payment;
