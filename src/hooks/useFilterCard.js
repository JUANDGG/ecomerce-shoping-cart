
//hooks
import { useContext } from "react";

//custom hooks
import useFetch from "@customHooks/useFetch.js"

//context
import { GlobalContext } from '@context/GlobalContext.jsx';


function useFilterCard (){
    const URI = import.meta.env.VITE_URI_FAKE_STORE_API;


    ///////ALL PRODUCTS
    const ENDPOINT_FOR_ALL_PRODUCTS = import.meta.env.VITE_END_POINT_PRODUCTS_ALL_FAKE_STORE_API;
    const BUILD_URI_FOR_ALL_PRODUCTS = URI + ENDPOINT_FOR_ALL_PRODUCTS
    ////////


    /////////Products by category
    const ENDPOINT_FOR_CATEGORY_PRODUCTS =import.meta.env.VITE_END_POINT_PRODUCT_FOR_CATEGORIE_FAKE_STORE_API
    const BUILD_URI_FOR_CATEGORY_PRODUCTS = URI + ENDPOINT_FOR_CATEGORY_PRODUCTS
    ////////



    const {nameCategory} =useContext(GlobalContext)


    const { data } = useFetch(nameCategory.toLowerCase() =='all' ? BUILD_URI_FOR_ALL_PRODUCTS :BUILD_URI_FOR_CATEGORY_PRODUCTS + nameCategory);
    



    return {data}



  
}

export default useFilterCard;