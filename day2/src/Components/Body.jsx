/** @format */

import { Student } from "./Student";
import { Calc } from "./IncDec";
import PackingList from "./ConditionalRendering.jsx"
import { Run } from "./Timepass.jsx"
import { Todo } from "./Todo.jsx"

export let Body = () => {
  return (
    <>
      <article className="h-160">
        <Todo />
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
