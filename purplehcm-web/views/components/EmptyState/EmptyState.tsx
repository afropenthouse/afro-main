import Image from "next/image";
import React from "react";
import ArrowIcon from "@/assets/images/green-arrow-right.svg";
import cardIcon from "@/assets/images/empty-state-icon.svg";
import { PrimaryButton } from "../Button/Button";

export default function EmptyState({
  cardTitle,
  cardSubTitle,
  buttonTitle,
}: {
  cardTitle: string;
  cardSubTitle: string;
  buttonTitle: string;
}) {
  return (
    <div className="flex flex-col">
      <Image src={cardIcon} alt="" className="self-center" />
      <h1 className="text-[24px] leading-[40px] font-semibold pt-6 text-center">
        {cardTitle}
      </h1>
      <p className="pt-2 text-center">{cardSubTitle}</p>
      <PrimaryButton title={buttonTitle} />
    </div>
  );
}
