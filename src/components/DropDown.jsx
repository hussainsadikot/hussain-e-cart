import '../styles/dropdown.scss'
const DropDown = (props) => {
    const { options, placeholder, labelKey, idKey, value, handleChange } = props;

    return (
    <div>
        <select value={value} className="select-cont" onChange={handleChange}>
            <option value="">{placeholder}</option>
      <select value={value} placeholder={placeholder}>
          </select>

      {options?.map((opt) => {
     
        return <option label={opt.categoryName} value={opt.categoryName}>{opt.categoryName}</option>;
      })}
    </select>
    </div>
  )
}

export default DropDown
