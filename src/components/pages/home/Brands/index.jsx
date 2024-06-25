import Link from "@docusaurus/Link";
import Brand from "./Brand";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const brands = [
  {
    label: "BetMGM",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    url: "https://promo.nj.betmgm.com/en/promo/geolocator?orh=casino.betmgm.com",
  },
  {
    label: "Borgata",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729426/svg/brands/borgata_ms2oh6.svg",
    url: "https://promo.borgataonline.com/en/promo/geolocator?orh=casino.borgataonline.com",
  },
  {
    label: "PartyCasino",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729430/svg/brands/partycasino_ziqhts.svg",
    url: "https://casino.nj.partycasino.com/en/games",
  },
  {
    label: "partypoker",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729434/svg/brands/partypoker_zm9fse.svg",
    url: "https://poker.nj.partypoker.com/",
  },
  {
    label: "Wheel Of Fortune",
    image:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729438/svg/brands/wof_zglu4s.svg",
    url: "https://casino.wheeloffortunecasino.com/en/games",
  },
];

export default function () {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <h2 className="text-center md:text-start">Brands</h2>
          <Carousel infinite={true} responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2
            }
          }}>
            {brands.map(({ image, label, url }, index) => (
            <div
              className="daisy-carousel-item"
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
          </Carousel>
      </div>
    </section>
  );
}
