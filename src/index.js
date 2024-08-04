import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/navbar";

const Index = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
