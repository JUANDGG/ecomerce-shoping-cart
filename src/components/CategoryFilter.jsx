

//components
import Select from '@components/Select.jsx'

// custom hooks
import useFilterCategory from '@customHooks/useFilterCategory.js'

function CategoryFilter() {
  const {data , selectedValue  ,changeValue} = useFilterCategory();
  

  

  const handleChange = (event) => {
    const value = event.target.value;
    changeValue(value)
  };

  
  return (
    <Select
      data={data}
      label="Select Category"
      value={selectedValue}
      onChange={handleChange}
    />
  );
}

export default CategoryFilter;