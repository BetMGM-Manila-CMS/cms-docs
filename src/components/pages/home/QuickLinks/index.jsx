import Link from "@docusaurus/Link";
import CardLink from "../../../CardLink"

const links = [
  {
    label: "Sitecore",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719798547/svg/tools/sitecore_avcnda.svg",
    url: "https://cms-us.prod.env.works/sitecore/shell?sc_lang=en",
  },
  /* {
      label: "Sitecore CA",
      image:
        "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719798547/svg/tools/sitecore_avcnda.svg",
      url: "http://cms.prod.env.works/sitecore/shell?sc_lang=en",
  }, */
  {
    label: "Monday",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719798570/svg/tools/monday_bqcfbq.svg",
    url: "https://betmgm4thwkmary2022.monday.com/boards/5770205863/",
  },
  {
    label: "Workfront",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719799410/svg/tools/workfront_qkveb3.svg",
    url: "https://betmgm.my.workfront.com/home/workspaces",
  },
];

export default function QuickLinks() {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <div className="mb-4 text-center md:flex justify-between">
          <h2 className=" md:text-start mb-0">Quick Links</h2>
          <Link to="/quick-links">View All</Link>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-6 md:space-y-0">
          {
            links.map((link, index) => <CardLink {...link} key={index} />)
          }
        </div>
      </div>
    </section>
  );
}