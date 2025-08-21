/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { loginSchema } from "./LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginFOrmHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>React form Hook</h1>
      <h2>Login Form Using React Hook Form</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", { required: "Passwprd is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginFOrmHook;
