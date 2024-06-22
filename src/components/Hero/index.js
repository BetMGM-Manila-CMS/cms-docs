export function Hero({ background = {}, children, className }) {
  const { image, size, position, attachment } = background;

  return (
    <section
      style={{
        backgroundImage: `url(${
          image ||
          "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png"
        })`,
        backgroundSize: `${size || "cover"}`,
        backgroundPosition: `${position || "center"}`,
        backgroundAttachment: `${attachment || "fixed"}`,
      }}
      className={`bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed ${className}`}
    >
      {children}
    </section>
  );
}
