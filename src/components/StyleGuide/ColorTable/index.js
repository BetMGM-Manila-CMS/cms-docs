import CodeBlock from '@theme/CodeBlock';

export const ColorTable = ({ styles }) => {
    return (
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th></th>
                    {
                        styles.map((style, index) => {
                            return (
                                <th
                                    key={index}
                                    style={{
                                        backgroundColor: style.backgroundColor,
                                        color: style.color,
                                    }}
                                >
                                    {style.name}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Background</th>
                    {
                        styles.map((style, index) => {
                            return (
                                <td key={index}>
                                    <CodeBlock>
                                        {style.backgroundColor}
                                    </CodeBlock>
                                </td>
                            )
                        })
                    }
                </tr>
                <tr>
                    <th>Text</th>
                    {
                        styles.map((style, index) => {
                            return (
                                <td key={index}>
                                    <CodeBlock>
                                        {style.color}
                                    </CodeBlock>
                                </td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}