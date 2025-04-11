import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const AuthenticatedLayout = ({
  children,
  pageTitle,
  pageSubTitle,
}: {
  children: any;
  pageTitle?: any;
  pageSubTitle?: string;
}): JSX.Element => {
  const [isSideBar, setIsSideBar] = useState(false);
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
    <div className={`w-full flex`}>
      <Sidebar isSidebar={isSideBar} setIsSidebar={setIsSideBar} />
      {/* <div className="w-full md:w-[85%] h-full flex flex-col overflow-y-auto bg-background"> */}
      {/* <Header
        isSidebar={isSideBar}
        setIsSidebar={setIsSideBar}
        pageTitle={pageTitle}
      /> */}
      <div
        className="relative lg:left-[240px] py-3 pr-3 bg-[#F9FAFB] h-screen max-h-screen "
        style={{
          width: `${screenWidth > 1023 ? "calc(100% - 240px)" : "100%"}`,
        }}
      >
        <div className="relative flex flex-col w-full h-full border-[1px] border-[#EAECF0] rounded-[12px] bg-[#FFFFFF] overflow-scroll ">
          <div className="py-6 px-10 border-[1px] border-b-[#0000001A] border-t-transparent border-x-transparent bg-white sticky top-0 z-10 ">
            <div className="text-[#0A0A0B] text-[20px] font-[700] leading-[30px] ">
              {pageTitle}
            </div>
          </div>
          <div className="py-8 px-10">{children}</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AuthenticatedLayout;
