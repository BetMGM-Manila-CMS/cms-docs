import teamData from "@site/config/team";

export default function Member() {
  const members = teamData.members

  return (
    <section className="container relative mb-8 lg:mb-16">
      <div className="max-w-screen-xl px-4 pb-4 mx-auto sm:pb-8 lg:px-6">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-primary ">
          Members
        </h2>
        <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {members
            .filter((member) => !member.isProbation)
            .map(({ name, title, image }, index) => {
              return (
                <div className="group">
                  <div className="mb-2 overflow-hidden bg-white rounded-lg aspect-square">
                    {image && (
                      <img
                        src={image}
                        alt=""
                        className="object-cover w-full h-full duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <p className="mb-2 font-extrabold leading-none tracking-tight text-white text-gray-900 text-md md:text-lg lg:text-xl">
                    {name}
                  </p>
                  <p className="text-sm leading-none tracking-tight text-white text-gray-900 md:text-lg">
                    {title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <h2 className="text-center">New Roarers</h2>
        <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {members
            .filter((member) => member.isProbation)
            .map(({ name, title, image }, index) => {
              return (
                <div className="group">
                  <div className="mb-2 overflow-hidden bg-white rounded-lg aspect-square">
                    {image && (
                      <img
                        src={image}
                        alt=""
                        className="object-cover w-full h-full duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <p className="mb-2 font-extrabold leading-none tracking-tight text-white text-gray-900 text-md md:text-lg lg:text-xl">
                    {name}
                  </p>
                  <p className="text-sm leading-none tracking-tight text-white text-gray-900 md:text-lg">
                    {title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
