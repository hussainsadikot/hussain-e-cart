import "../styles/input.scss";
const Input = ({ onChange, value }) => {
  return <input value={value} className={"input"} onChange={onChange} placeholder="Search Product" />;
};

export default Input;
