import React from "react";
import PersonalInformation from "./PersonalInformation";
import Documents from "./Documents";
import ProfessionalInformation from "./ProfessionalInformation";

const ProfileTab = ({
  pageQuery,
  handlePageQuery,
  pageDetails,
}: {
  pageQuery: any;
  handlePageQuery: any;
  pageDetails: any;
}) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center border-b-[1px] border-b-[#A2A1A833] w-full ">
        <div
          className={`px-4 py-4 cursor-pointer ${
            (pageQuery === undefined ||
              pageQuery === "personal-information" ||
              pageQuery === "") &&
            "border-b-[3px] border-[#6544C5]"
          } `}
          onClick={() => handlePageQuery("profile", "personal-information")}
        >
          <p
            className={`text-[16px] font-[500] leading-6  ${
              pageQuery === undefined ||
              pageQuery === "personal-information" ||
              pageQuery === ""
                ? "text-[#6544C5]"
                : "text-[#678196]"
            }`}
          >
            Personal Information
          </p>
        </div>
        <div
          className={`px-4 py-4 cursor-pointer ${
            pageQuery === "professional-information" &&
            "border-b-[3px] border-[#6544C5]"
          } `}
          onClick={() => handlePageQuery("profile", "professional-information")}
        >
          <p
            className={`text-[16px] font-[500] leading-6  ${
              pageQuery === "professional-information"
                ? "text-[#6544C5]"
                : "text-[#678196]"
            }`}
          >
            Professional Information
          </p>
        </div>
        <div
          className={`px-4 py-4 cursor-pointer ${
            pageQuery === "documents" && "border-b-[3px] border-[#6544C5]"
          } `}
          onClick={() => handlePageQuery("profile", "documents")}
        >
          <p
            className={`text-[16px] font-[500] leading-6  ${
              pageQuery === "documents" ? "text-[#6544C5]" : "text-[#678196]"
            }`}
          >
            Documents
          </p>
        </div>
      </div>

      {(pageQuery === undefined ||
        pageQuery === "" ||
        pageQuery === "personal-information") && (
        <PersonalInformation pageDetails={pageDetails} />
      )}
      {pageQuery === "professional-information" && (
        <ProfessionalInformation pageDetails={pageDetails} />
      )}
      {pageQuery === "documents" && <Documents pageDetails={pageDetails} />}
    </div>
  );
};

export default ProfileTab;
