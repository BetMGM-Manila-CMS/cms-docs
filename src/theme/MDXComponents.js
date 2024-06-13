import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import Image from '@theme/IdealImage';

import {
  TinaTable,
  TinaTableRow,
  TinaTableCell,
  TinaSpacer,
  RichTable,
  RichTableRow,
  GameLinks,
  TinaTabs,
  Col,
  Row,
  BrowserWindow,
  StyleGuide,
  ColorTable
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
  TinaTableCell: TinaTableCell,
  TinaSpacer: TinaSpacer,
  GameLinks: GameLinks,
  TinaTabs: TinaTabs,
  IdealImage: Image,
  Col: Col,
  Row: Row,
  BrowserWindow: BrowserWindow,
  StyleGuide: StyleGuide,
  ColorTable: ColorTable
};
