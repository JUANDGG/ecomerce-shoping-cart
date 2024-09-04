import useFetchin from '@customHooks/useFetchin.js'

function Card ({uri}){
    const {data} = useFetchin(uri);


    return (
        <ul>
            {
                /* load card  */
            }
        </ul>
    )
}