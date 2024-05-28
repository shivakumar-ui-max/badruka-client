import React, { useContext, Suspense, lazy } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Prizes from "./components/Prizes";
// import Glimps from "./pages/Glimps";
// import Contact from "./pages/Contact";
// import BbcitInfo from "./pages/BbcitInfo";
// import Register from "./components/Register";
// import Acknowledgement from "./components/Acknowledgement.jsx";

const Home = lazy(() => import("./pages/Home"));
const Prizes = lazy(() => import("./components/Prizes"));
const Glimps = lazy(() => import("./pages/Glimps"));
const Contact = lazy(() => import("./pages/Contact"));
const BbcitInfo = lazy(() => import("./pages/BbcitInfo"));
const Register = lazy(() => import("./components/Register"));
const Acknowledgement = lazy(() => import("./components/Acknowledgement.jsx"));
const Navbar = lazy(() => import("./components/Navbar"));
import { dataStore } from "./context/Store.jsx";

const App = () => {
   const { show, acknowledgement } = useContext(dataStore);
   return (
      <>
         <Suspense fallback={<div>Loading...</div>}>
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
         </Suspense>
      </>
   );
};

export default App;
