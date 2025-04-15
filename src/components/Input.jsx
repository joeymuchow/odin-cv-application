import "../styles/Input.css";

function Input({ id, label, type = "text", onChange, parentClass = "input-grid" }) {
  return (
    <div className={parentClass}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={onChange} />
    </div>
  );
}

export default Input;
