export let List = () => {
  let list = ['apple', 'banana', 'grews', 'gava']
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let evnNum = numbers.filter(n => n % 2 === 0)
  return (
    <ul>
      {list.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
      {
        evnNum.map(i => (
          <li key={i}>{i}</li>
        ))
      }
      {
        numbers.map(i => (
          <li key={i}>{i}</li>
        ))
      }
    </ul>
  )

}

