import { Button } from "./Button.jsx"
import { ParentComp } from "./ParentComp.jsx"

export let Body3 = () => {
  const submision = {
    backgroundColor: "red",
    color: "green",
    fontSize: "2em",
  }

  const click = {
    backgroundColor: "green",
    color: "yellow",
    fontSize: "2em"
  }

  const wee = {
    backgroundColor: "pink",
    color: "gray",
    fontSize: "2em"
  }

  return (
    <>
      <article className="h-160">
        <Button style={submision} message={"Submitted"}>Submit</Button>
        <Button style={click} message={"Clickde"}>Click</Button>
        <Button style={wee} message={"weeeeeeeeeee"}>wee</Button>
      </article>
    </>
  );
};
