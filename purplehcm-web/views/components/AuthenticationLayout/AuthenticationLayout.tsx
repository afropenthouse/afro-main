import Image from "next/image";
import React, { useState, useEffect } from "react";
import PurpleWhite from "../../assets/images/purple-white.svg";
import PurpleBlack from "../../assets/images/purple-black.svg";
import { useRouter } from "next/router";

const AuthenticationLayout = ({
  pageTitle,
  pageDescription,
  onClick,
  children,
  sideBack,
  mobileLogo,
}: {
  pageTitle?: string;
  pageDescription?: string;
  onClick?: any;
  children?: any;
  sideBack: any;
  mobileLogo?: boolean;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  const handleImageLoad = (setLoading: any) => {
    setLoading(false); // This should hide the loader
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex relative w-full">
        <div className="hidden lg:block w-[30%] h-screen fixed p-8 left-0 z-10">
          {(!isLoading || !isLogoLoading) && (
            <>
              <Image
                src={PurpleWhite}
                alt="side-logo"
                onLoad={() => handleImageLoad(setIsLogoLoading)}
                className="cursor-pointer relative z-10"
              />
              <div className="flex flex-col gap-2 absolute left-8 bottom-[112px] z-10">
                <h1 className="text-[40px] text-[#ffffff] leading-[40px] lg:text-[48px] font-[700] max-w-[442px] lg:leading-[48px] tracking-[-0.06em] ">
                  {pageTitle}
                </h1>
                <p className="text-[16px] text-[#EAECF0] leading-[24px] font-[400] max-w-[442px]">
                  {pageDescription}
                </p>
              </div>
            </>
          )}

          {(isLoading || isLogoLoading) && (
            <div
              role="status"
              className="w-full h-full absolute top-0 left-0 z-[100] animate-pulse"
            >
              <div className="h-full bg-[#cbcbcbb2] w-full "></div>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <Image
            src={sideBack}
            alt="side-back"
            layout="fill"
            fill
            // loading="lazy"
            objectFit="cover"
            onLoad={() => handleImageLoad(setIsLoading)}
            className={`z-0 absolute top-0 left-0 object-cover ${(isLoading || isLogoLoading) ? "opacity-0" : "opacity-100"}`}
            placeholder="blur"
          />
        </div>

        <div className="w-full lg:w-[70%] h-screen lg:absolute bg-white p-5 lg:p-[104px] top-0 right-0 flex pt-[32px] lg:pt-[90px] pb-[110px] flex-col gap-[30px]">
          {mobileLogo && (
            <Image
              src={PurpleBlack}
              alt="mobile-logo"
              className="cursor-pointer lg:hidden"
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
