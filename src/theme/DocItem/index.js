/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from "react";

import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";

import axios from 'axios'

import Admonition from '@theme/Admonition';

import { AuthorBadge } from "../../components";

import { removeDuplicates } from "@site/utils/array.js"

import { TinaMarkdown } from "tinacms/dist/rich-text"
import { useTina } from "tinacms/dist/react"

export default function DocItem(props) {
  const [contributors, setContributors] = useState([])
  const [lastUpdate, setLastUpdate] = useState({})

  useEffect(() => {
    const requestPath = `https://api.github.com/repos/Kyle-Atienza/cms-docs/commits?path=${window.location.pathname}.mdx`

    axios.get(requestPath)
      .then((res) => {
        const commits = res.data

        setContributors(
          commits.map((commit) => ({
            name: commit.author ? commit.author.login : commit.commit.author.name,
            avatar: commit.author ? commit.author.avatar_url : null
          }))
            .reduce((commits, commit) => {
              if (!commits.filter(commitItem => commitItem.name === commit.name).length) {
                commits.push(commit)
              }
              return commits
            }, [])
        )

        setLastUpdate(commits[0])
      })
      .catch((e) => {
        console.log(e)
      })

  }, [])

  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  const { last_update, authors } = props.content.frontMatter;

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
          <div className="mt-8 pt-8 border-t-[1px] border-primary flex flex-col md:flex-row gap-6">
            <div className="w-full mt-8 md:mt-0 md:text-right md:w-1/2">
              <h5 className="text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contributors
              </h5>
              {contributors.length ? (
                <div className="mb-6">
                  <div className='divider divider--contributor text-start'><span className='divider__inner'>Github</span></div>
                  <div className="flex flex-col gap-2 mt-5">
                    {contributors.map(({ name, avatar }, index) => {
                      return <AuthorBadge name={name} avatar={avatar} key={index} />;
                    })}
                  </div>
                </div>
              ) : null}
              {MDXComponent.frontMatter.contributors ?.length ? (
                <div className="mb-6">
                  <div className='divider divider--contributor text-start'><span className='divider__inner'>Members</span></div>
                  <div className="flex flex-col gap-2 mt-5">
                    {MDXComponent.frontMatter.contributors.map((contributor, index) => {
                      return <AuthorBadge name={contributor} key={index} />;
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            {lastUpdate ?.commit ? (
              <div className="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-gray-700 transition h-min">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Last Update
                  </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {lastUpdate ?.commit.message}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <AuthorBadge name={lastUpdate ?.author.login} avatar={lastUpdate ?.author.avatar_url} />
                  <p className="text-xs text-end">
                    {new Date(lastUpdate ?.commit.author.date).toDateString()}
                  </p>
                </div>
              </div>
            ) : null}

          </div>
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
