import "../styles/Button.css";

function Button({ className, onClick, text }) {

    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button