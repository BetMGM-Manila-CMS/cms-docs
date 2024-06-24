import Link from "@docusaurus/Link";
import Brand from "./Brand";

const brands = [
  {
    label: "BetMGM",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "/",
  },
  {
    label: "Borgata",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729426/svg/brands/borgata_ms2oh6.svg",
    url: "/",
  },
  {
    label: "PartyCasino",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729430/svg/brands/partycasino_ziqhts.svg",
    url: "/",
  },
  {
    label: "partypoker",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729434/svg/brands/partypoker_zm9fse.svg",
    url: "/",
  },
  {
    label: "Wheel Of Fortune",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729438/svg/brands/wof_zglu4s.svg",
    url: "/",
  },
];

export default function () {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <h2 className="text-center md:text-start">Brands</h2>
        <div className="w-full daisy-carousel rounded-box">
          {brands.map(({ image, label, url }, index) => (
            <div
              className="md:w-64 lg:w-72 daisy-carousel-item w-60"
              key={index}
            >
              <Brand
                image={image}
                label={label}
                url={url}
                className={"w-full mr-4"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
