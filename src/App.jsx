import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./App.css";
// import { Header } from "./components/sections/Header.jsx";
// import { Footer } from "./components/sections/Footer.jsx";
import "./index.css";

function App() {

  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text--gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {/* <div>
        <Header />
        <Footer />
      </div> */}
    </>
  )
}

export default App
