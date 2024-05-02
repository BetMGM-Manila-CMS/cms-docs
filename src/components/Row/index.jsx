export const Col = ({ children, ratio, sticky }) => {
    return (
        <div className={`${ratio && ratio > 1 ? `flex-[${ratio}]` : 'flex-1'}`}>
            <div className={sticky ? 'sticky top-[100px]' : ''}>
                {children}
            </div>
        </div>
    )
}

export const Row = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {children}
        </div>
    )
}