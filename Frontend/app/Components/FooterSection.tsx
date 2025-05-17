import Link from "next/link";

function FooterSection({
  heading,
  list,
  isIcons,
}: {
  heading: string;
  list: (string | React.ElementType)[];
  isIcons?: boolean;
}) {
  return (
    <div className="flex items-start flex-col gap-4 w-[20%] h-[60%]">
      <h2>{heading}</h2>

      <ul
        className={`flex items-start justify-start ${
          isIcons ? "flex-row gap-5" : "flex-col gap-3"
        } `}
      >
        {list.map((Elem: any, index): any => {
          return (
            <Link
              className="text-xs hover:text-gray-200 text-gray-300"
              href="/"
              key={index}
            >
              {isIcons && typeof Elem === "function" ? (
                <Elem className="w-4 h-4" />
              ) : (
                Elem
              )}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterSection;