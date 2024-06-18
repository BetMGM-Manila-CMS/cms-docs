import Layout from "@theme/Layout";
import Masonry from '@mui/lab/Masonry';

const sampleData = [
    {
        "label": "Website Development",
        "checklist": [
            "Design wireframes",
            "Code HTML/CSS templates",
            "Implement responsive design",
            "Optimize images and assets"
        ]
    },
    {
        "label": "Mobile App Testing",
        "checklist": [
            "Perform unit testing",
            "Conduct integration testing",
            "Check UI/UX consistency",
            "Test functionality across devices",
            "Review performance metrics"
        ]
    },
    {
        "label": "Software Deployment",
        "checklist": [
            "Prepare deployment plan",
            "Set up staging environment",
            "Execute deployment scripts",
            "Verify data integrity",
            "Perform rollback tests if necessary"
        ]
    },
    {
        "label": "Product Launch",
        "checklist": [
            "Coordinate marketing campaigns",
            "Prepare press releases",
            "Train customer support teams",
            "Monitor website traffic"
        ]
    },
    {
        "label": "Quality Assurance",
        "checklist": [
            "Define testing criteria",
            "Execute test cases",
            "Document test results",
            "Validate bug fixes",
            "Perform regression testing",
            "Conduct user acceptance testing"
        ]
    },
    {
        "label": "Content Creation",
        "checklist": [
            "Research target audience",
            "Develop content strategy",
            "Write SEO-friendly content",
            "Proofread and edit"
        ]
    },
    {
        "label": "Event Planning",
        "checklist": [
            "Secure venue and permits",
            "Create event schedule",
            "Arrange catering and vendors"
        ]
    },
    {
        "label": "Financial Audit",
        "checklist": [
            "Gather financial documents",
            "Conduct risk assessment",
            "Review accounting practices",
            "Verify compliance with regulations"
        ]
    },
    {
        "label": "Customer Onboarding",
        "checklist": [
            "Create user accounts",
            "Provide training sessions",
            "Set up personalized profiles",
            "Collect customer feedback"
        ]
    },
    {
        "label": "Security Assessment",
        "checklist": [
            "Perform vulnerability scan",
            "Conduct penetration testing",
            "Review access controls"
        ]
    }
]


function Checklist({ checklist }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{checklist.label}</h5>
            <div className="*:mb-2">
                {
                    checklist.checklist.map((checklistItem, index) => {
                        return (
                            <div className="flex items-center" key={index}>
                                {/* <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                                <input type="checkbox" className="daisy-checkbox [--chkbg:theme(colors.primary)]" />
                                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{checklistItem}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

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
                        <details className="daisy-dropdown dropdown-start tracking-normal !inline-flex self-end mr-2 md:mr-4">
                            <summary className="daisy-btn daisy-btn-sm md:daisy-btn-md bg-primary text-white hover:bg-gray-600">
                                Casino
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </summary>
                            <ul className="p-2 daisy-shadow daisy-menu daisy-dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-2 shadow">
                                {/* {
                                    quickLinksData.quickLinksGroup.map((quickLink, index) => <li className="font-normal text-white" key={index}><Link to={`/quick-links?group=${quickLink.label.toLowerCase().replaceAll(' ', '-')}`}>{quickLink.label}</Link></li>)
                                } */}
                            </ul>
                        </details>
                        Checklists
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Checklists for each component ensuring consistent, high-quality construction standards across the team.
                    </p>
                    {/* <input type="text" placeholder="Search Checklists" className="daisy-input daisy-input-bordered w-full max-w-xs" /> */}
                </div>

            </section>

            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    <div className="p-6 rounded-2xl bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
                        Casino
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
                        Poker
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
                        Sports
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
                        Common
                    </div>
                </div> */}
                <Masonry columns={{ xs: 2, md: 3, lg: 4 }} spacing={4}>
                    {sampleData.map((data, index) => (
                        <Checklist checklist={data} key={index} />
                    ))}
                </Masonry>
            </section>
        </Layout>
    )
}