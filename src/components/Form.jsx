
function Form({changeNewClub, addNewClub}) {

    const handleChange = (ev) => {

        const value = ev.target.name === "name" ? ev.target.value : ev.target.checked

        const object = {key: ev.target.name, value:value}
        changeNewClub(object)
    }
    const handleClick = (ev) => {
        ev.preventDefault()
        addNewClub()
    }

  return (
    <form action="" onChange={handleChange}>
        <label htmlFor="name">Nombre del Club</label>
        <input type="text" name="name" id="name"/> <br/>
        <label htmlFor="">Abre entre semana</label>
        <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays"/> <br/>
        <label htmlFor="">Abre fines de semana</label>
        <input type="checkbox" name="openOnWeekend" id="openOnWeekend"/> <br/>
        <button onClick={handleClick}>Añadir nuevo club</button>
    </form>

  )
}

export default Form