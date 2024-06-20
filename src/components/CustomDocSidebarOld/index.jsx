import clsx from "clsx";
import DocSidebar from "@theme/DocSidebar"
import { ThemeClassNames } from '@docusaurus/theme-common';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css';

import styles from "./style.css"

export default function CustomDocSidebar() {
    return (
        <aside className={`${clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer,
        )} custom-docsidebar`}>
            <DocSidebar sidebar={[
                { type: "link", href: "/team/weekly-schedule?=1", label: "My Custom Page" },
                { type: "link", href: "/team/weekly-schedule?=2", label: "My Custom Page" },
            ]} path="/team/weekly-schedule" hideable={false}>
            </DocSidebar>
        </aside>
    )
}