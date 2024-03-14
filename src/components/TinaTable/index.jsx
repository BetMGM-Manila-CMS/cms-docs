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
    let items = children;

    // Adjusting leftHeader
    if (leftHeader && children.length) {
        items = children.map(row => ({
            ...row,
            props: {
                ...row.props,
                children: row.props.children.map((cell, index) => (
                    index === 0 ? { ...cell, props: { ...cell.props, header: true } } : cell
                ))
            }
        }));
    }

    // Adjusting columnWidth
    if (columnWidth) {
        const widths = columnWidth.split(', ').map(val => Number(val));
        const firstRow = items[0];
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
        };
        items = [topRow, ...items.slice(1)];
    }

    // Setting head
    let head;
    if (topHeader) {
        head = items.length ?
            items[0].props.children.map(cell => ({ ...cell, props: { ...cell.props, header: true } })) :
            [items.props.children.map(cell => ({ ...cell, props: { ...cell.props, header: true } }))];
    }

    // Setting body
    let body;
    if (head) {
        body = items.length > 1 ? items.slice(1) : null;
    } else {
        body = items.length > 1 ? items : [items];
    }

    return (
        <table>
            {head &&
                <thead>
                    <tr>{head}</tr>
                </thead>
            }
            {body &&
                <tbody>{body}</tbody>
            }
        </table>
    );
};
