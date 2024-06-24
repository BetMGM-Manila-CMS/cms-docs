import Feature from "./Feature";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    label: "Get Building Your Builds",
    description: "Know how to create the different needs for your tickets.",
    url: "docs/builds/casino-style-guide",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719035564/stock/glenn-carstens-peters-npxXWgQ33ZQ-unsplash_zg8qvw.jpg",
  },
  {
    label: "Get to Know the Team",
    description:
      "Stay informed with our team structure and familiarize yourself with everyone on board.",
    url: "/team",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719035625/team/team_s3tuzf.jpg",
  },
  {
    label: "Check Latest Updates",
    description: "Easily stay updated with our announcement page.",
    url: "/updates",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719035557/stock/oleg-laptev-QRKJwE6yfJo-unsplash_jpq9sm.jpg",
  },
];

export default function () {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          {FeatureList.map((feature, index) => {
            return (
              <Feature
                label={feature.label}
                description={feature.description}
                url={feature.url}
                image={feature.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
