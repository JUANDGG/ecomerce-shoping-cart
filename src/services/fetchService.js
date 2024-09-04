function fetchService(uri){
    return fetch(uri).then(res=>res.json()).then(res=>res)
}

export default fetchService