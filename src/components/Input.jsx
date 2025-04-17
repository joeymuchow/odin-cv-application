import "../styles/Input.css";

function Input({
  id,
  label,
  type = "text",
  onChange,
  parentClass = "input-grid",
  errorMessage = "",
}) {
  return (
    <>
      <div className={parentClass}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} onChange={onChange} />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
}

export default Input;
