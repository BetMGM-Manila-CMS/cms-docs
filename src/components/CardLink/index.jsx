import Link from "@docusaurus/Link";

export default function CardLink({url, label, image}) {
    return (
        <Link to={url} target="_blank">
                <div
                    className="flex items-center h-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow rtl:space-x-reverse rtl:divide-x-reverse dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-neutral-800 outline-offset-2 hover:outline-1 hover:outline outline-primary"
                    role="alert"
                >
                    <img className="p-0 m-0 w-7 h-7" src={image} />
                    <h5 className="mb-0 text-xl font-bold tracking-tight text-gray-900 ps-4 dark:text-white">
                        {label}
                    </h5>
                </div>
            </Link>
    )
}