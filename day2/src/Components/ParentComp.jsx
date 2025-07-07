import { ChildComp } from "./ClildComp"
export let ParentComp = () => {
  function handleClick() {
    alert("awwwwwwwwwwwwwwwwwwwwwwwwwww clildrena touchedddddd meeee!!")
  }
  return <ChildComp title={"set"} click={handleClick} ></ChildComp>
}
