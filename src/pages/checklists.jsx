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
        <div className="p-6 rounded-lg bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{checklist.label}</h5>
            <div className="*:mb-2">
                {
                    checklist.checklist.map((checklistItem, index) => {
                        return (
                            <div className="flex items-center" key={index}>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{checklistItem}</label>
                            </div>
                        )
                    })
                }
                <div className="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                </div>
                <div className="flex items-center mb-0">
                    <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                </div>
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
                        Checklists
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Checklists for each component ensuring consistent, high-quality construction standards across the team.
                    </p>
                </div>

            </section>

            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    {
                        sampleData.map((data, index) => {
                            return <Checklist checklist={data} key={index} />
                        })
                    }
                </div> */}
                {/* <Masonry columns={{ xs: 2, md: 3, lg: 4 }} spacing={2}>
                    {sampleData.map((data, index) => (
                        <Checklist checklist={data} key={index} />
                    ))}
                </Masonry> */}
            </section>
        </Layout>
    )
}