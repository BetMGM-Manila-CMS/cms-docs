import Link from "@docusaurus/Link";

export const UpdateCard = ({ update }) => {
    const { content: { frontMatter, metadata } } = update

    return (
        <Link to={`${metadata.permalink}`} className="group">
            <div
                className="rounded-xl h-64 w-full relative overflow-hidden bg-primary"
                style={{ perspective: "255px" }}
            >
                <img
                    className="absolute w-full h-full object-cover "
                    src={frontMatter.image}
                    alt=""
                />
                <div
                    className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-opacity duration-500"
                    style={{
                        backgroundImage: "linear-gradient(40deg, rgba(183,162,109,0.7483368347338936) 0%, rgba(46,61,75,0.5802696078431373) 65%)"
                    }}
                />
            </div>
            <div className="mt-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{frontMatter.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-6">{frontMatter.description}</p>
                <p className="mb-3 font-normal text-primary">Read in {Math.ceil(metadata.readingTime)} minutes</p>
            </div>
        </Link>
    )
}