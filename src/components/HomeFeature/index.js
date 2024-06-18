import Link from "@docusaurus/Link";

export const HomeFeature = function ({ icon, label, description, url }) {
  return (
    <div className="p-6 rounded-lg bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
      {icon}
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link
        to={url}
        className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-blue-700  hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 dark:bg-primary dark:hover:bg-white dark:focus:ring-primary-lightest"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};
