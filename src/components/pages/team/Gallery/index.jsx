import { Carousel } from "flowbite-react";

const images = [
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208118/team/media_20240607_120435_3189189189796603020_fa7ply.jpg"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208130/team/ImportedPhoto.738587400.295891_nvgef9.jpg"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208105/team/3652F41E-7429-4441-80DA-3A16CD91A98B_snxiac.jpg"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208118/team/media_20240607_120435_3189189189796603020_fa7ply.jpg"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208100/team/439620342_968207854694233_4155486433328895428_n_vlhyfh.png"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208085/team/CFD1F44E-468D-467B-ACE2-44FA94BDDCD4_dwobpo.jpg"
  },
  {
    image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719208082/team/FDA6BFFF-600F-4600-B405-EB0E08C6E67D_hjcmfg.jpg"
  }
]

export default function () {
  return (
    <section className="container relative">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <div className="h-[60vw] max-h-[300px] md:h-[500px] md:max-h-[unset] border-primary border rounded-xl overflow-hidden">
          <Carousel leftControl={" "} rightControl={" "}>
            {
              images.map(({ image }, index) => (
                <img
                  key={index}
                  src={image}
                  alt="..."
                />
              ))
            }
          </Carousel>
        </div>
      </div>
    </section>
  );
}
