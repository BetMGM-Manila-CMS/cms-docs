import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { TinaMarkdown } from "tinacms/dist/rich-text";

export const TinaTabs = ({ items }) => {
    if (items) {
        return (
            <Tabs>
                {
                    items.map((tab, index) => {
                        console.log(tab.content)
                        return (
                            <TabItem key={index} value={tab.value} label={tab.label}>
                                {/* <TinaMarkdown content={tab.children} /> */}
                                {tab.image ? <img src={`${tab.image}`} alt={`${tab.value} image`} /> : null}
                                {tab.content ? tab.content.split('\n').map(line => {
                                    return (
                                        <p>{line}</p>
                                    )
                                }) : null}
                            </TabItem>
                        )
                    })
                }
            </Tabs>
        )
    }

}