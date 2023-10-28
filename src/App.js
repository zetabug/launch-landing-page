import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Some from "./Some";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <div className="blob-c">
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
      </div>

      <nav>
        <p>
          THE <span>PRODUCT</span> PLATFORM
        </p>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/some" element={<Some />} />
      </Routes>
    </div>
  );
}
