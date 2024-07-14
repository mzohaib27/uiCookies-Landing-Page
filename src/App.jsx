import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.jsx";
import ArrowBtn from "./Components/ArrowBtn.jsx";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className=" fixed right-6 bottom-6">
          <Link smooth={true} duration={300} to={"home"}>
            <ArrowBtn />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
