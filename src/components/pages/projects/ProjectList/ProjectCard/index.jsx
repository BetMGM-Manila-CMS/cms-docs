
import Link from "@docusaurus/Link";

export default function ({ label, description, url, image, createdBy }) {
    return (
        <div className="overflow-hidden transition bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 hover:border-primary group">
            <div className="h-40 relative">
                <img
                    src={image}
                    className="object-cover w-full h-full mb-0"
                    alt="project image"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-opacity duration-500"
                    style={{
                        backgroundImage: "linear-gradient(40deg, rgba(183,162,109,0.7483368347338936) 0%, rgba(46,61,75,0.5802696078431373) 65%)"
                    }}
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between gap-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {label}
                    </h5>
                    <div className="inline-flex items-center justify-between px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-full mb-3 dark:bg-gray-800 dark:text-white whitespace-nowrap self-start">
                        {createdBy}
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <Link
                    to={url}
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:outline-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-white dark:focus:ring-primary-lightest"
                >
                    Open Tool
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
        </div>
    );
}
