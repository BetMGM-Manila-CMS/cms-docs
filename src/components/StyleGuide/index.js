import "./styles.css"
import CodeBlock from '@theme/CodeBlock';
import { BrowserWindow } from "../BrowserWindow"

import { useState } from "react"

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

export const StyleGuide = ({ styles }) => {
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
                <div className="p-4 rounded border-[1px] border-gray-600">
                    <h3>Links</h3>
                    <BrowserWindow>
                        <a
                            style={{ color: selectedStyle.backgroundColor }}
                            href="https://help.nj.betmgm.com/en/general-information/howto/bonus/opt-out"
                        >
                            General Terms and Conditions
                        </a>
                    </BrowserWindow>
                    <CodeBlock language="html">
                        {`<a style="color: ${selectedStyle.backgroundColor}" href="#">
    General Terms and Conditions
</a>`}
                    </CodeBlock>
                </div>
                <div className="p-4 rounded border-[1px] border-gray-600">
                    <h3>CTAs/Button</h3>
                    <BrowserWindow>
                        <a
                            class="btn"
                            style={{ color: selectedStyle.color, backgroundColor: selectedStyle.backgroundColor }}
                            href="#"
                        >
                            Spin Now
                        </a>
                    </BrowserWindow>
                    <CodeBlock language="html">
                        {`<a class="btn" style="color: ${selectedStyle.color}; background-color: ${selectedStyle.backgroundColor}"href="#" >
    Spin Now
</a>`}
                    </CodeBlock>
                </div>
                <div className="p-4 rounded border-[1px] border-gray-600 col-span-1 lg:col-span-2">
                    <h3>Tables</h3>
                    <BrowserWindow>
                        <table className="table table-striped table-bordered" >
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
                        </table>
                    </BrowserWindow>
                    <CodeBlock language="html">
                        {`<table class="table table-striped table-bordered" style="text-align: center; background-color: #fff;">
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
</table>`}
                    </CodeBlock>
                </div>
                <div className="p-4 rounded border-[1px] border-gray-600 col-span-1 lg:col-span-2">
                    <h3>Tables</h3>
                    <BrowserWindow>
                        <div className="poker-table">
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
                        </div>
                    </BrowserWindow>
                    <CodeBlock language="html">
                        {`<style>
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
</details>`}
                    </CodeBlock>
                </div>
            </div>
        </div>
    )
}