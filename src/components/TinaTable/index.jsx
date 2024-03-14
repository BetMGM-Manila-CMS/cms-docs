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

    const head = topHeader && items.length ? items[0].props.children.map(cell => ({
        ...cell,
        props: {
            ...cell.props,
            header: true,
        }
    })) : null
    const body = head ? items.slice(1) : items.length ? items : [items]

    return (
        <table>
            {
                head ? <thead>
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