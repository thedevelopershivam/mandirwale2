function Error({ error, className }) {
    return error &&
        <span className={`text-textDanger rounded font-semibold first-letter:capitalize ${className}`}>
            {error}
        </span>
}

export default Error