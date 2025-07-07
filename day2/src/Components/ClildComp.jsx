export let ChildComp = ({ title, click }) => {
  return (
    <>
      <button onClick={click} >{title}</button>
    </>
  );
};
