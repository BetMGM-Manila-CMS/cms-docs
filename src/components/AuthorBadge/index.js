export const AuthorBadge = ({ name, avatar, className }) => {
  console.log(name)

  const initials = name
    .split(" ")
    .map((part) => part.slice(0, 1).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className={`flex items-center gap-2 ${className} text-sm`}>
      {
        avatar ?
          <img class="w-8 h-8 m-0 rounded-full" src={avatar} alt="Rounded avatar" />
          :
          <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {initials}
            </span>
          </div>
      }
      <span>{name}</span>
    </div>
  );
};
