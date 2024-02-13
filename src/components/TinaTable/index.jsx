import CodeBlock from "@theme-original/CodeBlock";

export const TinaTableRow = ({ items }) => {
    const cellValue = (cell) => {
        if (cell.url) {
            return <a href={cell.url}>{cell.label}</a>
        }
        
        return cell.label
    }
    
    const cellWrapper = (cell) => {
        if (cell.style === "highlight") {
            return <code>{cellValue(cell)}</code>
        } else if (cell.style === "code") {
            return <CodeBlock className="mb-0">{cellValue(cell)}</CodeBlock>
        }

        return cellValue(cell)
    }

    const mapItems = (items) => {
        return items.map((cell, index) => cell.header ?
            <th
                key={index}
            >
                {cellWrapper(cell)}
            </th> :
            <td
                key={index}
            >
                {cellWrapper(cell)}
            </td>)

    }

    return (
        <>
            <tr>
                {items && items.length ? mapItems(items) : null}
            </tr>
        </>
    )
}

export const TinaTable = ({ children }) => {
    const head = children ? children[0] : null
    const body = children && children.length ? children.slice(1) : null

    return (
        <table>
            {
                head ?
                    <thead>
                        {head}
                    </thead>
                    : null
            }
            {
                body ?
                    <tbody>
                        {body}
                    </tbody>
                    : null
            }
        </table>
    )
}