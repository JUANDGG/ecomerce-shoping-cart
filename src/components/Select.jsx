// Component Select
import { useId } from "react";

function Select({ data, label, value, onChange }) {

  const idLabelSelect =useId()
  

  return (
    <div>
      {label && <label htmlFor={idLabelSelect} >{label}</label>}
      <select  id={idLabelSelect}  value={value} onChange={onChange}>
        <option value="all">All</option>
        {data && data.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;