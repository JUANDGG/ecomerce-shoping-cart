import { useState ,useEffect} from "react";



function useFetch(uri){
    const [data ,setData]  = useState([]) 
    

    
    useEffect(()=>{
            
        fetch(uri)
            .then(res=>res.json())
            .then(res=>{
                setData(res)
            })

        
    
    },[uri])


    return {data}



}

export default useFetch