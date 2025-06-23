/** @format */

export let Body = () => {
  return (
    <>
      <h1 className="mt-0 text-center bg-red-100">hello CCn!!!</h1>
      <article className="h-160">
        <Greeting name={"Ccn"} />
      </article>
    </>
  );
};
export let Greeting = (name) => {
  console.log(name);
  return <>{/* <h2>{name}</h2> */}</>;
};
