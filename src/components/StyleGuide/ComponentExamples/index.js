import "./styles.css"
import CodeBlock from '@theme/CodeBlock';
import { BrowserWindow } from "../../BrowserWindow"

import { useState } from "react"

const Box = ({ label, children, fullwidth }) => (
    <div className={`p-4 rounded border-[1px] border-gray-600 ${fullwidth ? 'col-span-1 lg:col-span-2' : ''}`}>
        <h3>{label}</h3>
        {children}
    </div>
)

const GTAC = (selectedStyle) => ({
    component: <a
        style={{ color: selectedStyle.backgroundColor }}
        href="https://help.nj.betmgm.com/en/general-information/howto/bonus/opt-out"
    >
        General Terms and Conditions
</a>,
    codeblock: `<a style="color: ${selectedStyle.backgroundColor}" href="#">
General Terms and Conditions
</a>`
})

const CTAB = (selectedStyle) => ({
    component: <a
        class="btn"
        style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}
        href="#"
    >
        Spin Now
</a>,
    codeblock: `<a class="btn" style="color: ${selectedStyle.color}; background-color: ${selectedStyle.backgroundColor}"href="#" >
    Spin Now
</a>`
})

const CasinoTable = (selectedStyle) => ({
    component: <table className="table table-striped table-bordered" >
        <thead>
            <tr>
                <th
                    colspan="2"
                    style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}
                >
                    $50K Leaderboard
            </th>
            </tr>
            <tr>
                <th
                    style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}
                >
                    Position
            </th>
                <th
                    style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}
                >
                    Reward
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>$25,000</td>
            </tr>
            <tr>
                <td><strong>Total </strong></td>
                <td><strong>$50,000 Casino Bonus</strong></td>
            </tr>
        </tbody>
    </table>,
    codeblock: `<table class="table table-striped table-bordered" style="text-align: center; background-color: #fff;">
    <thead>
        <tr>
            <th style="color: ${selectedStyle.color}; background-color: ${selectedStyle.backgroundColor};" colspan="2">
                <strong>$50K Leaderboard</strong>
            </th>
            </tr>
            <tr style="background-color: ${selectedStyle.backgroundColor}; color: ${selectedStyle.color};">
            <th style="background-color: ${selectedStyle.backgroundColor}; color: ${selectedStyle.color};">Position</th>
            <th style="background-color: ${selectedStyle.backgroundColor}; color: ${selectedStyle.color};">Reward</th>
        </tr>
    </thead>
    <tbody style="color: ${selectedStyle.color};">
        <tr>
            <td>1</td>
            <td>$25,000 + Vegas Invite</td>
            </tr>
            <tr>
            <td>
                <strong>Total:</strong>
            </td>
            <td>
                <strong>$50,000 Casino Bonus</strong>
            </td>
        </tr>
    </tbody>
</table>`
})

const PokerTable = (selectedStyle) => ({
    component: <div className="poker-table">
        <details>
            <summary style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}>Summer Classic Tournament Series</summary>
            <div class="tablescroll-accord">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Day</th>
                            <th>#</th>
                            <th>Prefix</th>
                            <th>Tournament</th>
                            <th>Baseball Name</th>
                            <th>Jersey</th>
                            <th>BI</th>
                            <th>NJ GTD</th>
                            <th>PA GTD</th>
                            <th>MI GTD</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        <tr>
                            <td>5:00 PM</td>
                            <td>July 14</td>
                            <td>Sunday</td>
                            <td>1</td>
                            <td>SUMMER CLASSIC #1:</td>
                            <td>$250 NLH</td>
                            <td>$250 FIRST PITCH</td>
                            <td>Y</td>
                            <td>$250.00</td>
                            <td>$30,000.00</td>
                            <td>$25,000.00</td>
                            <td>$25,000.00</td>
                        </tr>
                        <tr>
                            <td>5:00 PM</td>
                            <td>July 14</td>
                            <td>Sunday</td>
                            <td>1</td>
                            <td>SUMMER CLASSIC #1:</td>
                            <td>$250 NLH</td>
                            <td>$250 FIRST PITCH</td>
                            <td>Y</td>
                            <td>$250.00</td>
                            <td>$30,000.00</td>
                            <td>$25,000.00</td>
                            <td>$25,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>,
    codeblock: `<style>
.table tbody th,
.table tbody tr td,
.table thead th {
    vertical-align: middle;
}
.tablescroll {
    overflow: auto;
    max-height: 20em;
}
.tablescroll th {
    position: sticky;
    top: 0;
    z-index: 2
}
details {
    border: 1px solid #d4d4d4;
    padding: .75em .75em 0;
    margin-top: 10px;
    box-shadow: 0 0 20px #d4d4d4;
}
summary {
    font-weight: bold;
    margin: -.75em -.75em 0;
    padding: .75em;
    background-color: ${selectedStyle.backgroundColor};
    color: #fff;
}
details[open] {
    padding: .75em;
    border-bottom: 1px solid #d4d4d4;
}
details[open] summary {
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 10px;
}
.tablescroll-accord {
    overflow: auto;
}
.tablescroll-accord th {
    position: sticky;
    top: 0;
    z-index: 2
}
</style>

<details>
    <summary>Summer Classic Tournament Series</summary>
    <div class="tablescroll-accord">
        <table class="table table-bordered table-striped" style="text-align: center;">
            <thead>
                <tr style="color: #ffffff; background-color: ${selectedStyle.backgroundColor};">
                    <th>Time</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>#</th>
                    <th>Prefix</th>
                    <th>Tournament</th>
                    <th>Baseball Name</th>
                    <th>Jersey</th>
                    <th>BI</th>
                    <th>NJ GTD</th>
                    <th>PA GTD</th>
                    <th>MI GTD</th>
                </tr>
            </thead>
            <tbody align="center">
                <tr>
                    <td>5:00 PM</td>
                    <td>July 14</td>
                    <td>Sunday</td>
                    <td>1</td>
                    <td>SUMMER CLASSIC #1:</td>
                    <td>$250 NLH</td>
                    <td>$250 FIRST PITCH</td>
                    <td>Y</td>
                    <td>$250.00</td>
                    <td>$30,000.00</td>
                    <td>$25,000.00</td>
                    <td>$25,000.00</td>
                </tr>
                <tr>
                    <td>5:00 PM</td>
                    <td>July 14</td>
                    <td>Sunday</td>
                    <td>1</td>
                    <td>SUMMER CLASSIC #1:</td>
                    <td>$250 NLH</td>
                    <td>$250 FIRST PITCH</td>
                    <td>Y</td>
                    <td>$250.00</td>
                    <td>$30,000.00</td>
                    <td>$25,000.00</td>
                    <td>$25,000.00</td>
                </tr>
            </tbody>
        </table>
    </div>
</details>`
})

export const ComponentExamples = ({ styles, label = "casino" }) => {
    const [selectedStyle, setSelectedStyle] = useState(styles[0])

    return (
        <div class="style-guide">
            <select
                className="daisy-select daisy-select-bordered w-full max-w-xs"
                onChange={e => setSelectedStyle(styles.find(style => style.name === e.target.value))}
            >
                {
                    styles.map((style, index) => <option key={index} value={style.name}>{style.name}</option>)
                }
            </select>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <Box label="Links">
                    <BrowserWindow>{GTAC(selectedStyle).component}</BrowserWindow>
                    <CodeBlock language="html">{GTAC(selectedStyle).codeblock}</CodeBlock>
                </Box>
                <Box label="CTAs/Button">
                    <BrowserWindow>{CTAB(selectedStyle).component}</BrowserWindow>
                    <CodeBlock language="html">{CTAB(selectedStyle).codeblock}</CodeBlock>
                </Box>
                {
                    (label === "casino" && (
                        <Box label="Tables" fullwidth>
                            <BrowserWindow>{CasinoTable(selectedStyle).component}</BrowserWindow>
                            <CodeBlock language="html">{CasinoTable(selectedStyle).codeblock}</CodeBlock>
                        </Box>
                    ))
                }
                {
                    (label === "poker" && (
                        <Box label="Tables" fullwidth>
                            <BrowserWindow>{PokerTable(selectedStyle).component}</BrowserWindow>
                            <CodeBlock language="html">{PokerTable(selectedStyle).codeblock}</CodeBlock>
                        </Box>
                    ))
                }
            </div>
        </div>
    )
}