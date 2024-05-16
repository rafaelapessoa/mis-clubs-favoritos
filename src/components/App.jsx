import "../styles/App.scss";
import initialData from "../services/data.json"
import { useState } from "react";
import Clubs from "./Clubs";
import Form from "./Form";
import Filter from "./Filter";

function App() {

  const [clubs, setClubs] = useState(initialData);
  const [newClub, setNewClub] = useState({ name: "", openOnWeekdays: false, openOnWeekend: false})
  const [filter, setFilter] = useState("all")

  const changeNewClub = (object) => {
    setNewClub({...newClub, [object.key]:object.value})
  }

  const addNewClub =()=>{
    setClubs([...clubs, newClub])
  }

  const filteredClubs = clubs.filter((card)=>{
    if(filter === "weekend") {
      return card.openOnWeekend === true
    } else if (filter === "weekdays") {
      return card.openOnWeekdays === true
    }
    return true
  })

  return (
    <>
      <Filter setFilter={setFilter}/>
      <Clubs data={filteredClubs}/>
      <Form changeNewClub={changeNewClub} addNewClub={addNewClub} />
    </>
  )
}

export default App