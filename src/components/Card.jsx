



import {GlobalContext} from '@context/GlobalContext.jsx'
import { useContext } from 'react'

function Card (){
    

    const {nameCategory} = useContext(GlobalContext)


    return (
        <ul>
            <h1>{nameCategory}</h1>
        </ul>
    )
}


export default Card