import { useState ,useEffect} from "react";
import fetchService  from '@services/fetchService.js'


function useFetchin(uri){
    const [data ,setData]  = useState([]) 
    

    
    useEffect(()=>{
            
        fetchService(uri).then(res=>{
            setData(res)
        })
    
    },[uri])


    return {data}



}

export default useFetchin