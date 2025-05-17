import React from "react";
import { footerSectionData } from "../lib/footer";
import FooterSection from "./FooterSection";




function Footer() {
  return (
    <div className="w-full h-[30vh] bg-black">
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

        {/* Footer Separatar */}

        <div className="footer-separator w-[94%] mx-auto flex flex-col  gap-2 pb-5">
           <hr className="text-gray-600"/>
          <h6 className="text-gray-600 text-xs">© 2025 Muzer. All rights reserved.</h6>
        </div>



      </div>
    </div>
  );
}

export default Footer;
