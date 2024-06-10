import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function () {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="CMS Team" description="Know the Team">
      <section className="bg-white dark:bg-gray-900">
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
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-primary">
                        Test Page
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Lorem Ipsum Something
                    </p>
                </div>

            </section>
      </section>

      <main></main>
    </Layout>
  );
}
