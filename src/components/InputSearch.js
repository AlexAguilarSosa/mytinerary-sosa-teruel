import { useState } from "react"
import '../styles/InputSearch.css'

export default function InputSearch() {

    const [search, setSearch] = useState('')

  return (
    // <form>
    //     <input type="text" name="" autoComplete='off' onChange={ev => setSearch(ev.target.value)} />
    //     
    // </form>
    <form className="InputForm">
      <div className="InputContainer">
        <div>
          <select className="InputSelect" name="type" defaultValue="city">
            <option value="city">City</option>
            <option value="country">Country</option>
          </select>
        </div>
        <div>
          <input autoComplete="off" className="InputSearch" type="text" name="search" onChange={ev => setSearch(ev.target.value)} placeholder='Found Your Place'/>
        </div>
        <div>
          <button className="InputButton">Search</button>
        </div>
      </div>
      <p className="InputText">Result: {search}</p>
    </form>
  )
}
