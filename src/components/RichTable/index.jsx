import CodeBlock from "@theme-original/CodeBlock";
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export const RichTableRow = ({ items }) => {
    const mapItems = (items) => {
        return items.map((cell, index) => cell.header ?
            <th
                key={index}
            >
                <TinaMarkdown content={cell.children} />
            </th> :
            <td
                key={index}
            >
                <TinaMarkdown content={cell.children} />
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

export const RichTable = ({ children }) => {
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