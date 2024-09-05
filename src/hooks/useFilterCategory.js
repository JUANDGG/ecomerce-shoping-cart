import { useState, useContext, useEffect } from "react";
import useFetch from "@customHooks/useFetch.js";
import { GlobalContext } from '@context/GlobalContext.jsx';

function useFilterCategory() {
  // build URI for categories search
  const URI = import.meta.env.VITE_URI_FAKE_STORE_API;
  const ENDPOINT_FOR_CATEGORIES = import.meta.env.VITE_END_POINT_CATEGORIES_ALL_FAKE_STORE_API
  const BUILD_URI_CATEGORIES = URI + ENDPOINT_FOR_CATEGORIES;

  // fetch data from API
  const { data } = useFetch(BUILD_URI_CATEGORIES);

  // get context global
  const { setnameCategory } = useContext(GlobalContext);

  // state to store the value of the select
  const [selectedValue, setSelectedValue] = useState('all');

  // update context when selectedValue changes
  useEffect(() => {
    setnameCategory(selectedValue);
  }, [selectedValue, setnameCategory]);

  // chhange value and update context
  const changeValue = (value) => {
    setSelectedValue(value);
  };

  return { data, selectedValue, changeValue };
}

export default useFilterCategory;
