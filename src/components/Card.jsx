

import useFilterCard from '@customHooks/useFilterCard.js'

function Card (){
    

    const {data} =useFilterCard()
    

    return (
        <ul>
            {
                data && data.map(res=>(
                    <li key={res.id}>
                        <img src={res.image} alt={res.title} />
                        <p>{res.title}</p>
                        <small>$ {res.price}</small>
                    </li>
                ))
            }
        </ul>
    )
}


export default Card