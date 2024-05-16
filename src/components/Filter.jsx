
function Filter({setFilter}) {

    return(
        <div>
            <label htmlFor=""></label>
            <select onChange={(ev) => setFilter(ev.target.value)}>
                <option value="all">Todos</option>
                <option value="weekend">Abren los findes</option>
                <option value="weekdays">Abren entre semana</option>
            </select>
        </div>
    )
}

export default Filter