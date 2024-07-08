import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating size={24} color="red" maxRating={10} className="test" />
    */}
  </React.StrictMode>
);
