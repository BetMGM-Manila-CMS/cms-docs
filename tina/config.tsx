import React from "react";
import { MDXTemplates } from "../src/theme/template";
import { defineConfig } from "tinacms";
import { tinaTableTemplate } from 'tinacms'
import { PostCollection, DocCollection, SidebarCollection } from './collections'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  // branch,
  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      PostCollection,
      DocCollection,
      SidebarCollection
    ],
  },
});