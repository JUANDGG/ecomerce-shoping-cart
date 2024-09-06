

import useFilterCard from '@customHooks/useFilterCard.js'

function Card (){
    

    const {data} =useFilterCard()
    
    console.log(data);
    


    return (
        <ul>
            {
                data && data.map(res=>(
                    <li key={res.id}>
                        <img src={res.image} alt="" />
                        <p>{res.title}</p>
                        <small>$ {res.price}</small>
                    </li>
                ))
            }
        </ul>
    )
}


export default Card