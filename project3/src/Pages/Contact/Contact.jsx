/** @format */

import React from "react";
import { contacts } from "./ContactData";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-red-200">
      <h2 className="text-amber-50">Contacts</h2>
      {contacts.map((contact) => (
        <li key={contact.id}>
          ID: <Link to={`${contact.id}`}>{contact.id}</Link>
        </li>
      ))}
    </div>
  );
}

export default Contact;
