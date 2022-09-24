import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <React.StrictMode>
      <div className="spinnerLoading">
        <MutatingDots color="#0c120c" />
      </div>
    </React.StrictMode>
  );
};

export default Spinner;
