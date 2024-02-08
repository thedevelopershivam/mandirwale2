
function Wrapper({ children, className }) {
    return (
        <div className={`px-[calc(0px+4vw)] ${className}`}>{children}</div>
    )
}

export default Wrapper