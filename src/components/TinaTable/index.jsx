import CodeBlock from "@theme-original/CodeBlock";

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
        return <CodeBlock className="table-code">{cellValue(cell)}</CodeBlock>
    }

    return cellValue(cell)
}

const cellSpans = (cell) => {
    let spans = {}

    if (cell.rowSpan) {
        spans.rowSpan = cell.rowSpan
    }

    if (cell.colSpan) {
        spans.colSpan = cell.colSpan
    }

    return spans
}

const mapCells = (items, header = false) => {
    return items.map((cell, index) => {
        if (header == "first") {
            if (index == 0) {
                return (
                    <th {...cellSpans(cell)} key={index}>
                        {cellWrapper(cell)}
                    </th>
                )
            } else {
                return (
                    <td {...cellSpans(cell)} key={index} >
                        {cellWrapper(cell)}
                    </td>
                )
            }
        } else if (cell.header || header) {
            return (
                <th {...cellSpans(cell)} key={index}>
                    {cellWrapper(cell)}
                </th>
            )
        } else {
            return (
                <td {...cellSpans(cell)} key={index} >
                    {cellWrapper(cell)}
                </td>
            )
        }
    })

}

export const TinaTableRow = ({ items }) => {

    return (
        <>
            <tr>
                {items && items.length ? mapCells(items) : null}
            </tr>
        </>
    )
}

const ChildredContents = (children) => {
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

export const TinaTable = ({ children, rows, rowHeader, columnHeader }) => {

    const rowHead = rowHeader ? rows[0] : null
    const body = rowHead ? rows.slice(1) : rows

    console.log(rowHead, body)

    // version 1
    if (children) {
        return <ChildredContents children={children} />
    }

    if (rows) {
        return (
            <table>
                {
                    rowHead ?
                        <thead>
                            <tr>
                                {mapCells(rowHead.row, true)}
                            </tr>
                        </thead>
                        : null
                }
                {
                    body ?
                        <tbody>
                            {
                                body.map(({ row }) => {
                                    return (
                                        <tr>
                                            {mapCells(row, columnHeader ? "first" : false)}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        : null
                }
            </table>
        )
    }
}