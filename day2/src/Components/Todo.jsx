
export let Todo = () => {
  const data = [
    { id: 1, text: "laern ccn", status: false },
    { id: 2, text: "Learn react", status: true },
    { id: 3, text: "laern js", status: false },
    { id: 4, text: "laern C#", status: true },
    { id: 5, text: "laern weee", status: false },
    { id: 5, text: "laern cat", status: true },
  ]


  return (
    <>
      <ul>
        {
          data.map((value, index) => (
            <li key={index}>{value.text} {value.status ? '✅' : '❌'} </li>
          ))
        }
      </ul>
    </>
  )

}
