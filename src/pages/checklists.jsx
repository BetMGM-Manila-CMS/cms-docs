import Layout from "@theme/Layout";
import Masonry from "@mui/lab/Masonry";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useState } from "react";

import checklistsData from "@site/config/checklists/index.json";

function Checklist({ checklist }) {
  return (
    <>
      <div className="bg-white border border-gray-200 shadow daisy-collapse dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800">
        <input type="checkbox" className="w-full" />
        <div className="daisy-collapse-title">
          <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {checklist.label}
          </h5>
        </div>
        <div className="daisy-collapse-content">
          <div className="*:mb-2">
            {checklist.checklist.map((checklistItem, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center" >
                    <input
                      type="checkbox"
                      className="daisy-checkbox [--chkbg:theme(colors.primary)]"
                    />
                    <label
                      for="default-checkbox"
                      className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                    >
                      {checklistItem.label}
                    </label>
                  </div>
                  {
                    checklistItem.notes && (
                      <div className="ml-6" key={index}>
                        <p className="mb-0 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Notes:</p>
                        <ul className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                          {
                            checklistItem.notes.map(({note}, index) => <li key={index}>{note}</li>)
                          }
                        </ul>
                      </div>
                    )
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Checklists() {
  const checklists = checklistsData.checklistGroup;
  const [search, setSearch] = useState("");

  const location = useLocation();

  const params = location.search
    ? location.search
      .replace("?", "")
      .split("&")
      .reduce((params, param) => {
        const [key, value] = param.split("=");
        params[key] = value;
        return params;
      }, {})
    : {};

  const { group } = params;
  const findChecklists = (group) =>
    checklists.find(
      (data) => data.label.toLowerCase().replaceAll(" ", "-") === group
    );
  const checklist =
    group && findChecklists(group) ? findChecklists(group) : checklists[0];

  const checklistItems = checklist.checklists;
  const checlistItemsToMap =
    search && checklistItems
      ? checklistItems.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      )
      : checklistItems;

  const masonryColumnCount = (initialCount) =>
    checlistItemsToMap.length < initialCount
      ? checlistItemsToMap.length
      : initialCount;

  return (
    <Layout
      title="Checklists"
      description="Collection of checklists for each component, ensuring consistent and high-quality construction standards across the team."
    >
      <section
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <div className="mb-4">
          <details className="daisy-dropdown dropdown-start tracking-normal">
              <summary className="text-white daisy-btn daisy-btn-sm md:daisy-btn-md bg-primary hover:bg-gray-600">
                {checklist.label || "Choose Checklists"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </summary>
              <ul className="p-2 daisy-shadow daisy-menu daisy-dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-2 shadow max-h-56 flex-nowrap overflow-auto">
                {checklists.map((checklist, index) => (
                  <li className="font-normal text-white" key={index}>
                    <Link
                      to={`/checklists?group=${checklist.label
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {checklist.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
        </div>
          <h1 className="inline-flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-primary">
            Checklists
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
            Checklists for each component ensuring consistent, high-quality
            construction standards across the team.
          </p>
          <label class="daisy-input daisy-input-bordered flex items-center gap-2 max-w-xs mx-auto">
            <input
              type="text"
              className="p-0 border-none grow focus:ring-0"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
      </section>

      <section className="hidden max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6 sm:block">
        <Masonry
          columns={{
            xs: masonryColumnCount(1),
            sm: masonryColumnCount(2),
            md: masonryColumnCount(3),
            lg: masonryColumnCount(4),
          }}
          spacing={3}
        >
          {checlistItemsToMap.map((checklistItem, index) => (
            <Checklist checklist={checklistItem} key={index} />
          ))}
        </Masonry>
      </section>
      <section className="flex flex-col max-w-screen-xl gap-8 px-4 py-8 mx-auto sm:py-16 lg:px-6 sm:hidden">
        {checlistItemsToMap.map((checklistItem, index) => (
          <Checklist checklist={checklistItem} key={index} />
        ))}
      </section>
    </Layout>
  );
}
