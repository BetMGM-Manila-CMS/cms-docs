import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import {
  TinaTable,
  TinaTableRow,
  TinaSpacer,
  RichTable,
  RichTableRow,
} from "@site/src/components"

export default {
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
  TinaTable: TinaTable,
  TinaTableRow: TinaTableRow,
  RichTable: RichTable,
  RichTableRow: RichTableRow,
  TinaSpacer: TinaSpacer
};
