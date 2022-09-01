import { useState } from "react"

export default function InputSearch() {

    const [search, setSearch] = useState('')

  return (
    // <form>
    //     <input type="text" name="" autoComplete='off' onChange={ev => setSearch(ev.target.value)} />
    //     
    // </form>
    <form>
      <select name="type" defaultValue="city">
        <option value="city">City</option>
        <option value="country">Country</option>
      </select>
      <input type="text" name="search" onChange={ev => setSearch(ev.target.value)} placeholder='Found Your Place'/>
      <button>Search</button>
      <p>result: {search}</p>
    </form>
  )
}
