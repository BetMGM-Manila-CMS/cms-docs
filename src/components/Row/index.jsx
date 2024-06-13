export const Col = ({ children, ratio, sticky, className }) => {
    return (
        <div className={`doc-col ${ratio && ratio > 1 ? `flex-[${ratio}]` : 'flex-1'} ${className}`}>
            <div className={sticky ? 'sticky top-[100px]' : ''}>
                {children}
            </div>
        </div>
    )
}

export const Row = ({ children, className }) => {
    return (
        <div className={`doc-row flex flex-col lg:flex-row gap-4 mb-[1rem] ${className}`}>
            {children}
        </div>
    )
}