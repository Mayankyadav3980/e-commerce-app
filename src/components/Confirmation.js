import React from "react";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="conf-pg">
      <h1 className="confirmation">
        Order Confirmed
        <FaRocket color="green" />
      </h1>
      <Link to="/">
        <h4>Back to home</h4>
      </Link>
    </div>
  );
};

export default Confirmation;
