import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";

export default function () {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title="Quick Links" description="Collection of frequently used Sitecore links, tools, and previews">
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
                        Quick Links
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Collection of frequently used Sitecore links, tools, and previews
                    </p>
                </div>
            </section>
            <section class="">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-8">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Sitecore Links</h2>
                </div>
                <div class="max-w-screen-md mb-8 lg:mb-8">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Casino</h2>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:space-y-0">
                    {
                        Array.from(Array(10).keys()).map(key => {
                            return (
                                <Link to="/" key={key}>
                                    <div class="flex items-center p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                                        </svg>
                                        <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            </section>
        </Layout>
    );
}
