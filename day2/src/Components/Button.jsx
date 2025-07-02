export let Button = ({ message, children, style }) => {
  return (
    <>
      <button style={style} onClick={() => {
        alert(message)
      }} >{children}</button>
    </>
  )
}
