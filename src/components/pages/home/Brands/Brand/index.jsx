import Link from "@docusaurus/Link";

export default function ({ image, label, url, className }) {
  return (
    <Link
      to={url}
      className={`${className} overflow-hidden transition bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 group dark:hover:border-primary`}
    >
      <div className="flex w-full h-32 overflow-hidden">
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-0 transition-transform duration-500 bg-gray-800 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>
      </div>
    </Link>
  );
}
