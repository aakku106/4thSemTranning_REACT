let cat = () => {
  let catData = ['fatCat', 'ratCAt', 'matCAt', 'TaklingCat']
  return
}

function Item({ name, isPacked }) {
  return (
    <>
      <li> {name} {isPacked ? `Dome` : `XXX---XXX `} </li>
    </>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>CCn's Packing List</h1>
      <ul>
        <Item name={"shoose"} isPacked={false} />
        <Item name={"Moza"} isPacked={true} />
        <Item name={"nasta"} isPacked={true} />
      </ul>
    </section>
  )
}
