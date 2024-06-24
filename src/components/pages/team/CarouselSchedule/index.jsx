import CarouselAssignment from "./CarouselAssignment";

export default function () {
  return (
    <>
      <h2 className="text-center md:text-start">Carousel Checking</h2>
      <div className="mb-5">
        <div className="flex">
          <img
            className="w-5 h-5 p-0 m-0"
            src="https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg"
          />
          <h5 className="text-xs font-normal uppercase text-primary tracking-[0.15em] ms-2">
            BetMGM
          </h5>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CarouselAssignment />
          <CarouselAssignment />
          <CarouselAssignment />
          <CarouselAssignment />
        </div>
      </div>
      <div>
        <h5 className="text-xs font-normal uppercase text-primary tracking-[0.15em]">
          Sports
        </h5>
      </div>
    </>
  );
}
