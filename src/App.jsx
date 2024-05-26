import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prizes from "./components/Prizes";
import Glimps from "./pages/Glimps";
import Contact from "./pages/Contact";
import BbcitInfo from "./pages/BbcitInfo";
import Register from "./components/Register";
import { dataStore } from "./context/Store.jsx";
import Acknowledgement from "./components/Acknowledgement.jsx";
const App = () => {
   const { show, acknowledgement } = useContext(dataStore);
   return (
      <>
         {acknowledgement ? (
            <Acknowledgement />
         ) : (
            <div>
               <Navbar />
               {show ? (
                  <Register />
               ) : (
                  <main>
                     <Home />
                     <Prizes />
                     <Glimps />
                     <BbcitInfo />
                     <Contact />
                  </main>
               )}
            </div>
         )}
      </>
   );
};

export default App;
