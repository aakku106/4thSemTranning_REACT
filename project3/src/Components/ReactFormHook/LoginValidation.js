/** @format */

import React from "react";
import { z } from "zod";

// function LoginValidation() {
//   return <div>LoginValidation</div>;
// }

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Emai; is reqdd" })
    .email({ message: "INvalid emal address" })
    .startsWith("z", { message: "Email shall start with z" }),
  password: z
    .string()
    .min(1, { message: "Pass is reqd" })
    .min(6, { message: "Pass must have mn 6 lengh hehehe" })
    .max(20, { message: "Wtf are you even writing" })
    .endsWith("2", { message: "PAssword shall end with 2 " }),
});
