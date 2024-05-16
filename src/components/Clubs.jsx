import Card from "./Card"

function Clubs({data}) {

  return (    
        <div>
            {data.map((item, i) => <Card key = {i} club={item}/>)}
        </div>

  )
}

export default Clubs