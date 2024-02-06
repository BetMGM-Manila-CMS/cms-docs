import CodeBlock from "@theme-original/CodeBlock";

export const TinaTableRow = ({ items }) => {
    const cellValue = (cell) => {
        if (cell.style === "highlight") {
            return <code>{cell.label}</code>
        } else if (cell.style === "code") {
            return <CodeBlock className="mb-0">{cell.label}</CodeBlock>
        }

        return cell.label
    }

    const mapItems = (items) => {
        return items.map((cell, index) => cell.header ?
            <th
                key={index}
            >
                {cellValue(cell)}
            </th> :
            <td
                key={index}
            >
                {cellValue(cell)}
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