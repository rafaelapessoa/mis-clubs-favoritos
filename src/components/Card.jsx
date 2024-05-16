

function Card({club}) {
  return (
    <section>
        <h2>{club.name}</h2>
        <p>Abierto entre semana {club.openOnWeekdays ? "SI" : "NO"}</p>
        <p>Abierto fines de semana {club.openOnWeekend ? "SI" : "NO"}</p>          
    </section>
  )
}

export default Card