import "../styles/Input.css";

function Input({
  id,
  label,
  value = "",
  type = "text",
  onChange,
  parentClass = "input-grid",
  errorMessage = "",
}) {
  return (
    <>
      <div className={parentClass}>
        <label htmlFor={id}>{label}</label>
        {type === "textarea" ? 
          <textarea id={id} value={value} onChange={onChange} rows="5" cols="30" /> :
          <input type={type} id={id} value={value} onChange={onChange} />
        }
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
}

export default Input;
