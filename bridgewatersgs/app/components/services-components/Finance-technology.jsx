"use client";
import Image from "next/image";
import services_construction from "../../../public/bridgewaters/illustration-construction-site.jpg";
import services_engineering from "../../../public/bridgewaters/african-american-people-looking-supplies-list-pc-working-with-computer-check-inventory-logistics-employees-organizing-merchandise-shelves-warehouse-space-handheld-shot.jpg";
import services_marine from "../../../public/bridgewaters/vertical-shot-crane-lifting-white-boat-pier.jpg";
import services_security from "../../../public/bridgewaters/dragon-glass.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Finance_technology() {
  const slider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    pauseOnHover: false,
    // easing: 'ease-out',
    swipeToSlide: false,
    responsive: [
      // {
      //     breakpoint: 1024,
      //     settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true,
      //     },
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt-20 pb-10 px-5 md:px-[50px]">
      <div className="max-w-[741px]">
        <h4 className="font-semibold text-3xl">Engineering Services</h4>
        <p className="my-5">
          We provide total project support in Engineering, Civil and
          Installations, Global Procurement of Engineering Materials/Equipment,
          Project Management and Manpower Services for the oil & gas, energy and
          construction sector.
        </p>
      </div>
      <div className="w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 hidden md:grid center">
        {/* First */}
        <div className="w-full shadow-lg">
          <div>
            <Image
              src={services_construction}
              alt="Civil Construction & Minor Mechanical Works"
              className="w-full h-[250px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-2xl">
              Civil Construction & Minor Mechanical Works
            </h4>
            <div className="pt-5">
              <p>
                This includes general Civil works, Piling Works and Jetty
                Construction, Sand-filling/ Haulage and Dredging, Minor
                fabrication of steel structures and Equipment Installation, HDPE
                & GRVE Water Piping and Hydro-testing, Preparation of Drilling
                Location, etc.
              </p>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="w-full shadow-lg ">
          <div>
            <Image
              src={services_engineering}
              alt="Engineering Project Procurement"
              className="w-full h-[250px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-2xl">
              Engineering Project Procurement
            </h4>
            <div className="pt-5">
              <p>
                Our procurement covers Carbon Steel and Stainless-Steel Pipes
                and Plates, Pipe Fitting Materials (Valves, Flanges, Connectors,
                Reducers, Seal rings. Etc) , Equipment Spares
                (Process,Mechanical. Electrical and Instrumentation), Project
                Materials List Procurement
              </p>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="w-full shadow-lg ">
          <div>
            <Image
              src={services_marine}
              alt="Marine Equipment Supply"
              className="w-full h-[250px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-2xl">Marine Equipment Supply</h4>
            <div className="pt-5">
              <p>
                Badges with Tug Boat and WaterCraft Rentals, Boat Houses and
                Accommodation Badges, Haulage Equipment Rentals, Piling
                equipment Rentals, Lifting Equipment Rentals
              </p>
            </div>
          </div>
        </div>
        {/* Fourth */}
        <div className="w-full shadow-lg ">
          <div>
            <Image
              src={services_security}
              alt="Security Equipment & Installations"
              className="w-full h-[250px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-2xl">
              Security Equipment & Installations
            </h4>
            <div className="pt-5">
              <p>
                Supply & Installation of Bullet-Proof Doors and Windows, Supply
                and Installation of Bullet-Proof Glass Windows, Construction of
                Safety Containment Rooms and Buildings, Supply and Installation
                of Security Fencelines
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-10 md:hidden shadow-lg">
        <Slider ref={slider} {...settings}>
          {/* First */}
          <div className="w-full ">
            <div className="w-full flex justify-center">
              <Image
                src={services_construction}
                alt="Civil Construction Works"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-2xl">
                Civil Construction Works
              </h4>
              <div className="pt-5">
                <p>
                  This includes general Civil works, Piling Works and Jetty
                  Construction, Sand-filling/ Haulage and Dredging, Minor
                  fabrication of steel structures and Equipment Installation,
                  HDPE & GRVE Water Piping and Hydro-testing, Preparation of
                  Drilling Location, etc.
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="w-full">
            <div className="flex justify-center">
              <Image
                src={services_engineering}
                alt="Engineering Project Procurement"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-2xl">
                Engineering Project Procurement
              </h4>
              <div className="pt-5">
                <p>
                  Our procurement covers Carbon Steel and Stainless-Steel Pipes
                  and Plates, Pipe Fitting Materials (Valves, Flanges,
                  Connectors, Reducers, Seal rings. Etc) , Equipment Spares
                  (Process,Mechanical. Electrical and Instrumentation), Project
                  Materials List Procurement
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="w-full  ">
            <div className="flex justify-center">
              <Image
                src={services_marine}
                alt="Marine Equipment Supply"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-2xl">
                Marine Equipment Supply
              </h4>
              <div className="pt-5">
                <p>
                  Badges with Tug Boat and WaterCraft Rentals, Boat Houses and
                  Accommodation Badges, Haulage Equipment Rentals, Piling
                  equipment Rentals, Lifting Equipment Rentals
                </p>
              </div>
            </div>
          </div>
          {/* Fourth */}
          <div className="w-full ">
            <div className="flex justify-center">
              <Image
                src={services_security}
                alt="Security Equipment & Installations"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-2xl">
                Security Equipment & Installations
              </h4>
              <div className="pt-5">
                <p>
                  Supply & Installation of Bullet-Proof Doors and Windows,
                  Supply and Installation of Bullet-Proof Glass Windows,
                  Construction of Safety Containment Rooms and Buildings, Supply
                  and Installation of Security Fencelines
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex justify-center mt-10 md:hidden">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="rounded-full border border-[#1277AA] text-[#1277AA] mr-3"
        >
          <IoIosArrowRoundBack className="text-[#1277AA] text-4xl" />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="rounded-full border border-[#1277AA] ml-3"
        >
          <IoIosArrowRoundForward className="text-[#1277AA] text-4xl" />
        </button>
      </div>
    </section>
  );
}
