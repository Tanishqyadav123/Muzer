import Link from "next/link";
import React, { JSX } from "react";
import { footerSectionData } from "../lib/footer";
import { IconType } from "react-icons";



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

function Footer() {
  return (
    <div className="w-full h-[25vh] bg-black">
      <div className="w-[80%] h-full mx-auto">
        <div className="h-full flex items-center justify-evenly">
          {footerSectionData.map((data: any, index) => {
            return footerSectionData.length - 1 === index ? (
              <FooterSection
                key={index}
                heading={Object.keys(data)[0]}
                list={data[Object.keys(data)[0]]}
                isIcons={true}
                  
              />
            ) : (
              <FooterSection
                key={index}
                heading={Object.keys(data)[0]}
                list={data[Object.keys(data)[0]]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
