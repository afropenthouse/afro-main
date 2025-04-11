import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/purple-black.svg";
import DashboardIcon from "../../assets/images/dashboard-icon.svg";
import NotificationIcon from "../../assets/images/notification-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../helpers/routes";
import Router, { useRouter } from "next/router";
import { LOCAL_STORAGE_KEYS } from "../../helpers/localStorageKeys";
// import { ClickedIndexContext } from "../../helpers/context";
import LogoutIcon from "../../assets/images/logout-icon.svg";
import AvatarIcon from "../../assets/images/avatar-icon.svg";
import { ClickedIndexContext } from "../../helpers/context";
import { useAuth } from "../../context/AuthContext";
import { sidebar } from "../../helpers/data/Sidebar";

interface ISidebarProps {
  isSidebar?: boolean;
  setIsSidebar?: any;
}

export default function Sidebar(props: ISidebarProps) {
  const { isSidebar, setIsSidebar } = props;
  const router = useRouter();
  const ActiveLink = (href: string) => router.pathname.startsWith(href);
  const { logout } = useAuth();
  // const { clickedIndex, setClickedIndex } = useContext(ClickedIndexContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkModeEnabled =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDarkModeEnabled);
    }
  }, []);

  // Load the data from localStorage when the component mounts
  // useEffect(() => {
  //   const savedData = localStorage.getItem("clicked");
  //   if (savedData) {
  //     setClickedIndex(parseInt(savedData));
  //   }
  // }, [setClickedIndex]);

  // Save the data to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("clicked", clickedIndex.toString());
  // }, [clickedIndex]);

  // const toggle = (index: any) => {
  //   if (clickedIndex === index) {
  //     setClickedIndex(1000000);
  //   } else {
  //     setClickedIndex(index);
  //   }
  // };

  const handleLogout = () => {
    // logout();
    localStorage.clear();
    Router.push(ROUTES.SIGNIN);
  };

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  return (
    <>
      <div
        className={`flex flex-col max-w-[240px] w-full h-screen fixed bg-[#F9FAFB] lg:left-0 top-0 z-[51] lg:z-50 overflow-scroll ${
          isSidebar ? "left-0" : "-left-[240px]"
        }`}
      >
        <div className="px-6 pt-[32px] pb-8 ">
          <Image src={Logo} alt="purple-logo" />
        </div>
        <div className="flex flex-col gap-[8px] pr-2 ">
          <Link
            href="/dashboard"
            className={`flex items-center px-8 py-2.5 cursor-pointer  ${
              router.pathname === "/dashboard"
                ? "bg-[#E5E0F5] text-[#6544C5] gap-[16px] "
                : "bg-transparent text-[#394753] gap-[16px]"
            } `}
            // onClick={() => setClickedIndex(1000000)}
          >
            <Image
              src={
                router.pathname === "/dashboard" ? DashboardIcon : DashboardIcon
              }
              alt="item-icon"
            />
            <p className={`text-[14px] whitespace-nowrap `}>Dashboard</p>
          </Link>
          {sidebar.map(
            (item, index) => (
              // item?.subMenus.length > 0 ? (
              //   <div key={index}>
              //     <div
              //       className={`flex items-center px-4 py-2 cursor-pointer rounded-[100px] bg-[#FFFFFF] text-[#1E1E1E] dark:bg-[#1E1E1E] dark:text-[#FFFFFF]  ${
              //         ActiveLink(item?.path) &&
              //         "bg-[#1E1E1E] text-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#1E1E1E] gap-[16px] "
              //       } gap-[8px]`}
              //       onClick={() => toggle(index)}
              //       key={index}
              //     >
              //       <Image
              //         src={ActiveLink(item?.path) ? item.activeIcon : item.icon}
              //         alt="item-icon"
              //         className="fill-[#FF0000] text-[red]"
              //       />
              //       <p className="text-[16px] whitespace-nowrap ">{item.menu}</p>
              //     </div>
              //     {clickedIndex === index && (
              //       <div className="flex flex-col">
              //         {item.subMenus.map((subMenu: any, index) => (
              //           <Link
              //             href={subMenu?.path}
              //             key={index}
              //             className={`py-1 pl-[28px] pr-1 text-[15px] whitespace-nowrap ${
              //               ActiveLink(subMenu?.path) && "text-bespokeOrange "
              //             } `}
              //           >
              //             {subMenu?.subMenu}
              //           </Link>
              //         ))}
              //       </div>
              //     )}
              //   </div>
              // ) : (

              <Link
                href={item.path}
                key={index}
                className={`flex items-center px-8 py-2.5 cursor-pointer  ${
                  ActiveLink(item?.path)
                    ? "bg-[#E5E0F5] text-[#6544C5] gap-[16px] "
                    : "bg-transparent text-[#394753] gap-[16px]"
                } `}
                // onClick={() => setClickedIndex(1000000)}
              >
                <Image
                  src={ActiveLink(item?.path) ? item.activeIcon : item.icon}
                  alt="item-icon"
                />
                <p className={`text-[14px] whitespace-nowrap `}>{item.menu}</p>
              </Link>
            )
            // )
          )}
        </div>
        <div className="fixed bottom-0 w-full max-w-[240px] mx-auto flex flex-col py-4 gap-[40px] ">
          <Link
            href="/dashboard/notification"
            className={`flex items-center px-8 py-2.5 cursor-pointer bg-transparent text-[#667085] gap-[16px] `}
            // onClick={() => setClickedIndex(1000000)}
          >
            <Image src={NotificationIcon} alt="notification" />
            <p className={`text-[14px] whitespace-nowrap `}>Notifications</p>
          </Link>
          <div className="flex justify-between items-center px-6 py-3 border-[1px] border-t-[#F2F4F7] border-b-transparent border-x-transparent w-full ">
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src={AvatarIcon} alt="avatar-icon" />
              <div className="flex flex-col">
                <p className="text-[#101828] font-[700] text-[12px] leading-[18px] ">
                  {users?.firstName + " " + users?.lastName || "User's Name"}
                </p>
                <p className="text-[#475467] font-[400] text-[12px] leading-[18px] ">
                  Owner
                </p>
              </div>
            </div>
            <Image
              src={LogoutIcon}
              alt="logout-icon"
              className="cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
}
