import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTES } from "../../helpers/routes";
import CustomInputField from "../CustomHTMLElements/CustomInputField";

interface IHeaderProps {
  isSidebar?: boolean;
  setIsSidebar?: any;
  pageTitle?: string;
}

const Header = (props: IHeaderProps) => {
  const { isSidebar, setIsSidebar, pageTitle } = props;
  

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    } else {
      // Define a fallback value if window is not available (e.g., for server-side rendering)
      setScreenWidth(0); // or any other default value
    }
  }, []);

  return (
    <>
      <div
        className="fixed top-0 right-0 h-[48px] py-[6px] px-4 lg:px-[24px] lg:py-[60px] flex items-center justify-between z-50 bg-[#EBEAE8] "
        style={{
          width: `${screenWidth > 1023 ? "calc(100% - 280px)" : "100%"}`,
        }}
      >
        <div className="flex items-center gap-2 lg:hidden">
          
        </div>
        <h1 className="text-[28px] hidden xl:block text-bespokeDark font-[500]">
          {pageTitle}
        </h1>

        <div className="hidden lg:flex gap-[50px] items-center">
          <div className="min-w-[300px]">
            <CustomInputField
              placeholder="Search for something"
              type="text"
              style="w-full border-[1px] border-bespokeOrange hidden lg:block rounded-[121px] pl-[48px] pt-[24px] pb-[24px] bg-bespokeWhite "
            />
          </div>
          <div className="hidden xl:flex gap-[16px] items-center w-fit ">
            
          </div>
        </div>

        <div className="flex items-center gap-[16px] ">
          

          <div className="p-[8px] flex items-center gap-4 rounded-[120px] bg-bespokeWhite ">
            <div className="flex items-center gap-2">
              <div className="h-[52px] w-[52px] overflow-hidden rounded-[50%] ">
                {/* <Image src={ProfileAvatar} alt="profile" className="w-full" /> */}
              </div>
              <div className="hidden lg:flex flex-col gap-[2px]">
                <p className="text-[14px] font-[700] text-bespokeBlack whitespace-nowrap leading-4">
                  Hassan
                </p>
                <p className="text-[14px] font-[700] text-bespokeBlack whitespace-nowrap leading-3">
                  Tunmise
                </p>
              </div>
            </div>
            <div className="hidden lg:flex">
              {/* <Image
                src={ChevronDown}
                alt="chevron-down"
                className="w-[20px]"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
