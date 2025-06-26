/** @format */

import { Student } from "./Student";
import { Calc } from "./IncDec";
export let Body = () => {
  return (
    <>
      <h1 className="mt-0 text-center bg-red-100">hello CCn!!!</h1>
      <article className="h-160">
        <Calc />
        <Greeting FirstName={"Adarasha"} LastName={"Gaihre"} />
        <Student name={"aakku"} rollNo={16} facility={"csit"} />
        <Student name={"Adarasha"} rollNo={1} facility={"BAc.CSIT"} />
        <Student name={"asdasd"} rollNo={6} facility={"csit"} />
        <Student name={"CCN"} rollNo={13} facility={"CCN"} />
      </article>
    </>
  );
};
export let Greeting = ({ FirstName, LastName }) => {
  return (
    <>
      <h1 className="mt-3">
        Welci Master, {FirstName} {LastName}
      </h1>
    </>
  );
};
