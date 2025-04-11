import Image from "next/image";
import React from "react";
import ViewIcon from "../../../../assets/images/view-icon.svg";
import DownloadIcon from "../../../../assets/images/download-icon.svg";

const Documents = ({ pageDetails }: { pageDetails: any }) => {
  const Documents = [
    "Appointment Letter.pdf",
    "Salary Slip_June.pdf",
    "Salary Slip_May.pdf",
    "Salary Slip_April.pdf",
    "Reliving Letter.pdf",
    "Resume.pdf",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {pageDetails?.cvUrl && (
        <div className="p-4 rounded-[10px] border-[1px] border-[#A2A1A833] flex justify-between items-center ">
          <p className="text-[14px] font-[400] leading-6 text-[#16151C] ">
            Resume
          </p>
          <div className="flex items-center gap-4">
            <a href={pageDetails?.cvUrl} target="_blank">
              <Image
                src={ViewIcon}
                alt="view-icon"
                className="cursor-pointer"
                onClick={() => console.log("view")}
              />
            </a>
            <Image
              src={DownloadIcon}
              alt="download-icon"
              className="cursor-pointer"
              onClick={() => console.log("download")}
            />
          </div>
        </div>
      )}
      {pageDetails?.offerLetterUrl && (
        <div className="p-4 rounded-[10px] border-[1px] border-[#A2A1A833] flex justify-between items-center ">
          <p className="text-[14px] font-[400] leading-6 text-[#16151C] ">
            Offer Letter
          </p>
          <div className="flex items-center gap-4">
            <a href={pageDetails?.offerLetterUrl} target="_blank">
              <Image
                src={ViewIcon}
                alt="view-icon"
                className="cursor-pointer"
                onClick={() => console.log("view")}
              />
            </a>
            <Image
              src={DownloadIcon}
              alt="download-icon"
              className="cursor-pointer"
              onClick={() => console.log("download")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
