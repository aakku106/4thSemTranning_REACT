/** @format */

import React from "react";
import { contacts } from "./ContactData";
import { useNavigate, useParams } from "react-router-dom";

function Contactdetails() {
  const { contactId } = useParams();  
  const contact = contacts.find((c) => c.id === parseInt(contactId));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <>
      <h1>Contact Details</h1>
      <p>ID: {contact.id}</p>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>

      <button onClick={handleClick}>OKIII!!</button>
    </>
  );
}

export default Contactdetails;
