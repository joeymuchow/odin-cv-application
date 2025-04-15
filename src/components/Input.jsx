function Input({ id, label, type = 'text', onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange} />
        </div>
    )
}

export default Input