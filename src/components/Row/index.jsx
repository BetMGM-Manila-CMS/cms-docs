export const Col = ({ children, ratio, sticky }) => {
    return (
        <div className={`doc-col ${ratio && ratio > 1 ? `flex-[${ratio}]` : 'flex-1'}`}>
            <div className={sticky ? 'sticky top-[100px]' : ''}>
                {children}
            </div>
        </div>
    )
}

export const Row = ({ children }) => {
    return (
        <div className="doc-row flex flex-col lg:flex-row gap-4 mb-[1rem]">
            {children}
        </div>
    )
}