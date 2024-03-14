import { TinaMarkdown } from 'tinacms/dist/rich-text'

/* import CodeBlock from "@theme-original/CodeBlock";
import { TinaMarkdown } from 'tinacms/dist/rich-text'

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

export const TinaTableCell = ({ children }) => {
    return (
        <td>
            <TinaMarkdown content={children} />
        </td>
    )
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
} */

const cellSpans = (rowSpan = false, colSpan = false) => ({
    ...(rowSpan && { rowSpan }),
    ...(colSpan && { colSpan }),
});

export const TinaTableCell = ({ children, header, rowSpan, colSpan, className }) => {

    if (header) {
        return <th {...cellSpans(rowSpan, colSpan)} className={className} >{children}</th>
    } else {
        return <td {...cellSpans(rowSpan, colSpan)} className={className} >{children}</td>
    }

}

export const TinaTableRow = ({ children }) => {
    return (
        <tr>
            {children}
        </tr>
    )

}

export const TinaTable = ({ children, topHeader, leftHeader, columnWidth }) => {
    let items = children

    if (leftHeader) {
        items = children.map(row => ({
            ...row,
            props: {
                ...row.props,
                children: row.props.children.map((cell, index) => {
                    if (index === 0) {
                        return {
                            ...cell,
                            props: {
                                ...cell.props,
                                header: true
                            }
                        }
                    } else {
                        return cell
                    }
                })
            }
        }))
    }

    if (columnWidth) {
        const widths = columnWidth.split(', ').map(val => Number(val))
        const firstRow = items[0]

        const topRow = {
            ...firstRow,
            props: {
                ...firstRow.props,
                children: firstRow.props.children.map((cell, index) => ({
                    ...cell,
                    props: {
                        ...cell.props,
                        className: `w-[${widths[index]}%]`
                    }
                }))
            }
        }

        items = [topRow, ...items.slice(1)]
    }

    console.log(children)

    const head = topHeader && items.length ? items[0].props.children.map(cell => ({
        ...cell,
        props: {
            ...cell.props,
            header: true,
        }
    })) : null
    const body = head ? items.slice(1) : items



    return (
        <table>
            {
                head.length ? <thead>
                    <tr>
                        {head}
                    </tr>
                </thead> : null
            }
            {
                body.length ? <tbody>
                    {body}
                </tbody> : null
            }
        </table>
    )
}