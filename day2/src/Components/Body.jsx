/** @format */

export let Body = () => {
  return (
    <>
      <h1 className="mt-0 text-center bg-red-100">hello CCn!!!</h1>
      <article className="h-160">
        <Greeting FirstName={"Adarasha"} LastName={"Gaihre"} />
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
