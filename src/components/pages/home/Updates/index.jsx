import UpdateCard from "./UpdateCard";

export default function Updates({ updates }) {
  return (
    <section className="container">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
        <h2 className="text-center md:text-start">Latest Updates</h2>
        <div className="space-y-8 md:grid lg:grid-cols-2 md:gap-6 md:space-y-0">
          {updates &&
            updates
              .slice(0, 2)
              .map((update, index) => (
                <UpdateCard key={index} update={update} />
              ))}
        </div>
      </div>
    </section>
  );
}
