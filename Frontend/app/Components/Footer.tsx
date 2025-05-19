// import React from "react";
// import { footerSectionData } from "../lib/footer";
// import FooterSection from "./FooterSection";

// function Footer() {
//   return (
//     <div className="w-full h-[30vh] bg-black">
//       <div className="w-[80%] h-full mx-auto">
//         <div className="h-full flex items-center justify-evenly">
//           {footerSectionData.map((data: any, index) => {
//             return footerSectionData.length - 1 === index ? (
//               <FooterSection
//                 key={index}
//                 heading={Object.keys(data)[0]}
//                 list={data[Object.keys(data)[0]]}
//                 isIcons={true}

//               />
//             ) : (
//               <FooterSection
//                 key={index}
//                 heading={Object.keys(data)[0]}
//                 list={data[Object.keys(data)[0]]}
//               />
//             );
//           })}
//         </div>

//         {/* Footer Separatar */}

//         <div className="footer-separator w-[94%] mx-auto flex flex-col  gap-2 pb-5">
//            <hr className="text-gray-600"/>
//           <h6 className="text-gray-600 text-xs">© 2025 Muzer. All rights reserved.</h6>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import { footerSectionData } from "../lib/footer";
import FooterSection from "./FooterSection";

function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Footer Sections */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-8">
          {footerSectionData.map((data: any, index) => {
            const heading = Object.keys(data)[0];
            const list = data[heading];
            const isIcons = index === footerSectionData.length - 1;

            return (
              <FooterSection
                key={index}
                heading={heading}
                list={list}
                isIcons={isIcons}
              />
            );
          })}
        </div>

        {/* Footer Separator */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Muzer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
