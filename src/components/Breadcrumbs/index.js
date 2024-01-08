export const Breadcrumbs = ({ crumbs = [] }) => {
  return (
    <div
      aria-label="Breadcrumb"
      class="inline-flex items-center rtl:space-x-reverse list-none p-0 m-0"
    >
      {crumbs.map((crumb, index) => {
        return (
          <div key={index} class="inline-flex items-center m-0">
            <span class="inline-flex items-center text-md text-primary hover:text-black dark:text-white dark:hover:text-white">
              {index > 0 ? (
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              ) : null}
              {crumb}
            </span>
          </div>
        );
      })}
    </div>
  );
};
