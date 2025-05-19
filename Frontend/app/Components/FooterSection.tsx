
import Link from "next/link";

function FooterSection({
  heading,
  list,
  isIcons,
}: {
  heading: string;
  list: (string | React.ElementType)[]; // Icons or text
  isIcons?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
      <h2 className="text-white font-semibold text-sm">{heading}</h2>

      <ul
        className={`flex ${
          isIcons ? "flex-row gap-5" : "flex-col gap-2"
        } items-start justify-start flex-wrap`}
      >
        {list.map((Elem: any, index) => (
          <li key={index}>
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-gray-200 transition"
            >
              {isIcons && typeof Elem === "function" ? (
                <Elem className="w-4 h-4" />
              ) : (
                Elem
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
