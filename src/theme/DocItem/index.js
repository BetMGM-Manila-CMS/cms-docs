/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";
// import type {Props} from '@theme/DocItem';

import { AuthorBadge } from "../../components";

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  const { last_update, authors } = props.content.frontMatter;

  console.log(props.content.frontMatter);
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
          <div className="mt-8 pt-8 border-t-[1px] border-primary md:flex">
            {last_update ? (
              <div class="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-gray-700 transition">
                <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Last Update
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {last_update.description}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <AuthorBadge name={last_update.author} />
                  <p class="text-xs text-end">
                    {new Date(last_update.date).toDateString()}
                  </p>
                </div>
              </div>
            ) : null}
            {authors ? (
              <div className="w-full mt-8 md:mt-0 md:text-right md:pl-5 md:w-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Contributors
                </h5>
                <div className="flex flex-col gap-2 mt-5 md:items-end">
                  {authors.split(", ").map((author, index) => {
                    return <AuthorBadge name={author} />;
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
