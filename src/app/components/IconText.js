
function IconText({ icon, text, className }) {
    return (
        <div className={`flex gap-1 justify-center items-center text-textSafron ${className}`}>
            <span> {icon} </span>
            <span className="mt-0.5"> {text} </span>
        </div>
    )
}

export default IconText