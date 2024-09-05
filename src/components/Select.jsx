// Component Select
function Select({ data, label, value, onChange }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <select value={value} onChange={onChange}>
        <option value="all">All</option>
        {data && data.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;