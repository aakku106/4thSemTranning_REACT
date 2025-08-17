/** @format */
import "./UserCard.css";
import React from "react";

function UserCard({ name, age, email }) {
  return (
    <div className="user-card bg-amber-100 border-amber-300 ">
      <h3>{name}</h3>
      <p>AGE: {age}</p>
      <p>EMail: {email} </p>
    </div>
  );
}

export default UserCard;
