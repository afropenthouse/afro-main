"use client";

import { Suspense, useState } from "react";

import { contactDirectionData } from "@/lib/data";

import Container from "../common/Container";
import DirectionSingle from "./DirectionSingle";
import OfficeHead from "./OfficeHead";
import OfficePortHarcourTerminal from "./OfficePortHarcourTerminal";
import OfficePortHarcourFab from "./OfficePortHarcourFab";
import OfficeChevron from "./OfficeChevron";
import SkeletonMap from "../common/skeleton/SkeletonMap";

export default function Direction() {
  const [currentMap, setCurrentMap] = useState("head_office");

  return (
    <>
      <Container>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-6 pb-16 sm:pb-20">
          {contactDirectionData?.map((value) => (
            <DirectionSingle
              key={value.id}
              {...value}
              currentMap={currentMap}
              setCurrentMap={setCurrentMap}
            />
          ))}
        </div>
      </Container>

      <section id="map" className="w-full scroll-smooth">
        <Suspense fallback={<SkeletonMap />}>
          {currentMap === "head_office" && (
            <OfficeHead />
          )}
          {currentMap === "port_harcourt_terminal_office" && (
            <OfficePortHarcourTerminal />
          )}
          {currentMap === "port_harcourt_fab_office" && (
            <OfficePortHarcourFab />
          )}
          {currentMap === "chevron_office" && (
            <OfficeChevron />
          )}
        </Suspense>
      </section>
    </>
  );
}
