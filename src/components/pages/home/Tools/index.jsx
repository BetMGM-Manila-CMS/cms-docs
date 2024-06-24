import Link from "@docusaurus/Link";
import Tool from "./Tool";

const tools = [
  {
    label: "Carousel Scheduler",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "/",
  },
  {
    label: "Promohub Templates",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "/",
  },
  {
    label: "PAT UAT Images",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "/",
  },
  {
    label: "Carousel QA",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "/",
  },
  {
    label: "HTMLTidy",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719031382/svg/tools/html-tidy_ql6f2h.png",
    url: "/",
  },
  {
    label: "Text Compare",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719032042/svg/tools/text-compare_qcct1r.ico",
    url: "/",
  },
];

export default function () {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <h2 className="text-center md:text-start">Tools</h2>
        <div className="space-y-8 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-6 md:space-y-0">
          {tools.map(({ label, url, image }, index) => (
            <Tool label={label} url={url} image={image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
