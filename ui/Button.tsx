function Button({variant, onClick, startIcon, children}) {
    return(
        <button onClick={onClick} style={variant}>
            <span>{startIcon}</span>
            {children}
        </button>
    )
}

export default Button;