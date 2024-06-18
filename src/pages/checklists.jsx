import Layout from "@theme/Layout";

export default function Checklists() {
    return (
        <Layout title="Checklists" description="Collection of checklists for each component, ensuring consistent and high-quality construction standards across the team.">
            <section
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
                className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-primary text-white inline-flex">
                        Checklists
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Checklists for each component ensuring consistent, high-quality construction standards across the team.
                    </p>
                </div>

            </section>
        </Layout>
    )
}