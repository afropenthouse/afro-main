import Image from "next/image";
import landing_Img from "../../../public/what-we-do-assets/landing-img.png";
import quality_qms_Img from "../../../public/what-we-do-assets/ISO_9001-2015.webp";
import logo_exxonmobil from "../../../public/what-we-do-assets/clients-assets/logo_exxonmobil.png";
import logo_shell from "../../../public/what-we-do-assets/clients-assets/logo_shell.png";
import logo_totalenergies from "../../../public/what-we-do-assets/clients-assets/logo_totalenergies.webp";
import logo_npdc from "../../../public/what-we-do-assets/clients-assets/logo_npdc.png";
import logo_spie from "../../../public/what-we-do-assets/clients-assets/logo_spie.svg";
import logo_schneider_white from "../../../public/what-we-do-assets/clients-assets/logo_schneider_white.svg";
import partner_mampaey from "../../../public/what-we-do-assets/partner-assets/partner_mampaey.png";
import partner_weam from "../../../public/what-we-do-assets/partner-assets/partner_weam2.jpg";
import partner_act_nigeria from "../../../public/what-we-do-assets/partner-assets/partner_act_nigeria.jpeg";
import pink_coneShape from "../../../public/what-we-do-assets/pink-coneShape.png";
import blue_coneShape from "../../../public/what-we-do-assets/blue-coneShape.png";
import profile_image from "../../../public/bridgewaters/ceo-real.jpg";
import profile_image2 from "../../../public/bridgewaters/blackman-transformed.jpeg";
import Link from "next/link";

export default function page() {
  return (
    <main className="pt-[10vh] md:pt-[15vh]">
      <section className="w-full relative bg-primary">
        <div className="w-full h-[80vh] md:h-[100vh] overflow-hidden">
          <div className="w-full h-[80vh] md:h-[100vh] relative">
            <Image
              src={landing_Img}
              alt="home image"
              className="w-full object-cover h-full"
            />
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-32 md:left-[150px] md:bottom-[200px]">
              <p>What we do</p>
              <h1 className="text-2xl md:text-5xl font-bold mt-10">
                Who We Are
              </h1>
              <p className="font-normal text-base my-10">
                We are a company established to provide satisfactory and quality
                services for the oil and gas/ private sector of our economy
              </p>
              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[160px] h-[54px] text-white rounded-full">
                  <p className="mr-3">Connect with us</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="w-full py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-[50px] py-5 md:py-10">
          <div className="w-[160px] md:w-[250px] relative">
            <Image src={pink_coneShape} alt="pink shape" className="w-full" />
            <h2 className="text-4xl font-bold absolute top-[50%] -right-10 translate-y-[50%]">
              About Us
            </h2>
          </div>
          <div className="col-span-2 flex flex-col gap-y-4 justify-end mt-10 lg:mt-0">
            <p className="text-base">
              Bridge Waters G.S. Ltd was incorporated in Nigeria 2004 as a
              response to the emerging trends in the dynamic Oil & Gas industry
              Construction Services gap.
            </p>
            <p className="text-base">
              As a company which prides itself by being visionary and proactive
              ideas, we have progressively developed our competencies and
              positioned ourselves in the industry, with use of cutting edge
              tech and a vibrant workforce. We therefore believe that we are
              well on our way to take significant strides in the Engineering and
              Construction industry and be the service provider of choice to our
              clientele.
            </p>
            <p className="text-base">
              We are a Nigerian company and registered player in the Upstream,
              Midstream and Downstream sectors of the Oil & Gas industry.
              Although our subsidiaries operate in other sector of the economy
              like Consumer product, this remains the core of our business.
              {/* <span className="block mt-8">
                                Join us to shape the future!
                            </span> */}
            </p>
          </div>
        </div>
        {/* Our mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-5 md:px-[50px] gap-x-16 xl:gap-x-[100px]">
          <div className="flex items-center flex-col">
            <h3 className="text-3xl md:text-5xl text-black font-semibold">
              Our Vision
            </h3>
            <p className="md:text-center mt-5 md:mt-10">
              Our Organisational Vision goes beyond professionalism to building
              passionate world class service delivery to our clients: in
              excellence, setting engineering standards above existing ones,
              speed and creating aesthetics of the next generation as the end
              result.
              {/* <span className="block mt-5">
                                Join us to shape the future!
                            </span> */}
            </p>
          </div>
          <div className="flex items-center flex-col mt-10 md:mt-0">
            <h3 className="text-3xl md:text-5xl text-black font-semibold">
              Leading Edge
            </h3>
            <p className="md:text-center mt-5 md:mt-10">
              We are are intimated by that quality of faithfulness which enables
              the realization of our vision of excellence. Increasing
              technological development in line with industry trends, and an
              organisation which places quality service to client's satisfaction
              before profit.
              {/* <span className="block mt-5">
                                Join us to shape the future!
                            </span> */}
            </p>
          </div>
        </div>
        {/* 600+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-[50px] py-10">
          <div className="flex flex-col items-center text-[#004785] ">
            <h1 className="text-6xl font-bold ">30+</h1>
            <p>Clients Worldwide</p>
          </div>
          <div className="flex flex-col items-center text-[#004785] mt-10 md:mt-0">
            <h1 className="text-6xl font-bold">$10M+</h1>
            <p>Contract Value</p>
          </div>
          <div className="flex flex-col items-center text-[#004785] mt-10 md:mt-0">
            <h1 className="text-6xl font-bold">20Yrs</h1>
            <p>Experience Level</p>
          </div>
        </div>
      </section>

      {/* quality */}
      <section className="w-full py-10 px-5 md:px-[50px]">
        <div className="w-full max-w-[741px] mx-auto md:text-center flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold text-black leading-[50px]">
            Quality Management System (QMS) Compliance
          </h2>
          <p className="md:text-center mt-5 md:mt-10">
            In pursuance of quality service delivery, we are ISO 9001:2015
            certified. Through our periodic management review, we continually
            demonstrate that the QMS is being achieved, maintained and improved
            in accordance with ISO 9001:2015 and the regulatory bodies specific
            to our industry.
          </p>

          <div className="w-[120px] md:w-[140px] mt-5 md:mt-10">
            <Image
              src={quality_qms_Img}
              alt="QMS compliance certified logo"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* partnership */}
      <section className="w-full py-10 px-5 md:px-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 md:py-10">
          <div className="w-[160px] md:w-[250px] relative">
            <Image src={pink_coneShape} alt="pink shape" className="w-full" />
            <h2 className="text-4xl font-bold absolute top-[50%] -right-10 translate-y-[50%]">
              Partnership
            </h2>
          </div>
          <div className="col-span-2 flex flex-col gap-y-4 justify-center mt-10 lg:mt-0">
            <p className="text-base">
              BGS LIMITED is in partnership with the following Nigerian
              companies who have proven experience and technical competence in
              the areas of engineering design and provision of infrastructures
              to better serve the oil and gas sector.
            </p>
            <p className="text-base">
              The various areas of partnership includes:
            </p>
          </div>
        </div>

        <div className="w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 hidden md:grid">
          {/* First */}
          <div className="w-full shadow-lg">
            <div>
              <Image
                src={partner_act_nigeria}
                alt="Act Nigeria Limited, Port Harcourt"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-3xl">
                Act Nigeria Limited, Port Harcourt
              </h4>
              <div className="pt-5">
                <p>
                  Provision in three (3) years lease of fabrication space and
                  all relevant equipments for the execution of works as shall be
                  required.
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="w-full shadow-lg ">
            <div>
              <Image
                src={partner_weam}
                alt="Weam	Engineering, Port Harcourt"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-3xl">
                Weam Engineering, Port Harcourt
              </h4>
              <div className="pt-5">
                <p>
                  Provision of support Engineering Services for Front End
                  Engineering Design (FEED) to Detail Engineering of
                  infrastructures and Engineering Structures.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="w-full shadow-lg ">
            <div>
              <Image
                src={partner_mampaey}
                alt="Mampaey Offshore Industries"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-3xl">
                Mampaey Offshore Industries
              </h4>
              <div className="pt-5">
                <p>
                  Provision of Mooring Control Systems like Mooring Load
                  Monitoring Systems, Quick Release Hooks, Automatic Mooring
                  control Management Systems, Bouys, etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="w-full py-10 px-5 md:px-[50px]">
        <div className="w-full max-w-[741px] mx-auto md:text-center flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold text-black leading-[50px]">
            Some of Our Clients
          </h2>
          <p className="md:text-center mt-5 md:mt-10">
            As a result of our excellent service delivery, we have worked with
            top companies globally, delivering to their expected standards. Some
            of our clients include: SHELL NIGERIA, EXXONMOBIL, TOTAL ENERGIES,
            SPIE NIGERIA, TOTAL GOLF USA, NNPC, NPDC, SCHNIEDER ELECTRIC.
          </p>

          <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
            <div className="w-[100px] md:w-[120px]">
              <Image
                src={logo_exxonmobil}
                alt="logo exxonmobil logo"
                className="w-full"
              />
            </div>
            <div className="w-[100px]">
              <Image
                src={logo_shell}
                alt="logo shell logo"
                className="w-full"
              />
            </div>
            <div className="w-[100px] md:w-[120px]">
              <Image
                src={logo_totalenergies}
                alt="logo totalenergies logo"
                className="w-full"
              />
            </div>
            <div className="w-[100px] md:w-[120px]">
              <Image src={logo_npdc} alt="logo npdc logo" className="w-full" />
            </div>
            <div className="w-[100px] md:w-[120px]">
              <Image src={logo_spie} alt="logo spie logo" className="w-full" />
            </div>
            <div className="w-[100px] md:w-[120px] bg-[#3dcd58] p-3">
              <Image
                src={logo_schneider_white}
                alt="logo schneider logo"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="w-full pt-10 pb-20">
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-[50px] py-10">
          <div className="w-[160px] md:w-[250px] relative">
            <Image src={blue_coneShape} alt="pink shape" className="w-full" />
            <h2 className="text-4xl font-bold absolute top-[50%] -right-10 translate-y-[50%]">
              Our Team
            </h2>
          </div>
          <div className="col-span-2 flex flex-col gap-y-4 justify-end mt-10 lg:mt-0">
            <p className="text-base">
              Our Management Team is a combination of professionals with
              competencies that cut across various industries, exemplified in a
              comprehensive and excellent repertoire of over 20 years of
              expertise.
            </p>
            <p className="text-base">
              We are comprised of experienced professionals in diverse but
              operation related disciplines with proven track record in their
              respective fields (Engineering, Construction, Planning, Project
              Management and Supervision, Engineering Design, Business
              Administration/Evaluation, Local/International Relations, Risk
              Crisis Management, Logistics Administration, and Global
              Outsourcing abilities) acquired in the course of their
              professional career coupled with consultants on a retainer-ship
              agreement basis in the areas of assets, legalities, health and
              auditing.
            </p>
            <p className="text-base">
              The team is also trained to adapt to new engineering technology
              and provide the needed services anticipated.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-5 md:px-[50px] gap-10">
          <div className="shadow-lg pb-2">
            <Image
              src={profile_image}
              alt="pink shape"
              className="w-full h-[25rem] object-cover"
            />
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-2xl mt-3">Mr. Hope Etura</h4>
              <p className="my-3">Managing Director</p>
            </div>
          </div>
          <div className="shadow-lg pb-2">
            <Image
              src={profile_image2}
              alt="pink shape"
              className="w-full h-[25rem] object-cover"
            />
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-2xl mt-3">
                Mr. Williams Abang
              </h4>
              <p className="my-3">Marketing Head</p>
            </div>
          </div>

          {/* <div className="shadow-lg pb-10">
                        <Image
                            src={profile_image}
                            alt="pink shape"
                            className="w-full"
                        />
                        <div className="flex flex-col items-center">
                            <h4 className="font-semibold text-2xl mt-3">
                                Donald Strong
                            </h4>
                            <p className="my-3">Chief Executive Officer</p>
                        </div>
                    </div> */}
        </div>
      </section>
    </main>
  );
}
