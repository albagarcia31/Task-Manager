import React from "react";
import "./Badge.css";

const Badge = (props) => {
  const badgeColor = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "In Progress":
        return "blue";
      case "Pending":
        return "yellow";
      case "Completed":
        return "green";
      default:
        return "grey";
    }
  };
  return <p className={`status ${badgeColor()}`}>{props.status}</p>;
};

export default Badge;
