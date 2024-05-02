export const Row = ({ children, ratio }) => {
    return (
        <div className={`${ratio ? `flex-${ratio}` : 'flex-1'}`}>
            {children}
        </div>
    )
}

export const Col = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row">
            {children}
        </div>
    )
}