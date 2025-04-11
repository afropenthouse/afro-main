"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Icons } from "../common/Icons";
import Container from "../common/Container";
import ButtonComponent from "../common/ButtonComponent";
import HomeProductSingle from "./HomeProductSingle";

const filterButtonItems = [
  {
    label: "Below ₦10K",
    minAmount: 1000,
    maxAmount: 9999,
  },
  {
    label: "₦10K - ₦20K",
    minAmount: 10000,
    maxAmount: 20000,
  },
  {
    label: "₦20K - ₦30K",
    minAmount: 20000,
    maxAmount: 30000,
  },
  {
    label: "₦30K - ₦40K",
    minAmount: 30000,
    maxAmount: 40000,
  },
  {
    label: "₦40K - ₦50K",
    minAmount: 40000,
    maxAmount: 50000,
  },
  {
    label: "Above ₦50K",
    minAmount: 50000,
    maxAmount: 200000,
  },
]

const HomeProducts = () => {
  const itemsPerPage = 12;
  const [page, setPage] = useState(1);
  const [filterBy, setFilterBy] = useState("all");
  const [startAmount, setStartAmount] = useState(1000);
  const [endAmount, setEndAmount] = useState(9999);
  const [isOpen, setIsOpen] = useState(false);

  const openFilterOptions = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handlePriceFilter = (start, end) => {
    setStartAmount(start);
    setEndAmount(end);
    setPage(1);
  };

  const handleCityFilter = (city) => {
    if (city === filterBy) return;
    setFilterBy(city);
    setPage(1);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["venues", page, filterBy, startAmount, endAmount],
    queryFn: async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/web/all/`);
      if (filterBy !== "all") {
        url.searchParams.append("city", filterBy);
      }
      url.searchParams.append("startAmount", startAmount.toString());
      url.searchParams.append("endAmount", endAmount.toString());
      url.searchParams.append("page", page.toString());
      url.searchParams.append("count", itemsPerPage.toString());

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    },
    refetchOnMount: "always",
  });

  const LoadingSkeleton = () => (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 items-center justify-center">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="w-full h-full min-h-[550px] rounded-xl bg-app_primary_f0/20 animate-pulse" />
      ))}
    </div>
  );

  const EmptyState = () => (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-app_primary_f0/20">
        <Icons.search size={40} className="text-app_primary_f0/60" />
      </div>
      <h3 className="text-2xl font-medium text-app_tertiary mb-3">No venues found</h3>
      <p className="text-center text-app_tertiary/70 max-w-md mb-8">
        We couldn't find any venues that match your current filters. Try adjusting your search or explore other options.
      </p>
      <ButtonComponent
        primary
        label="Reset filters"
        onClick={() => {
          setFilterBy("all");
          setStartAmount(1000);
          setEndAmount(9999);
        }}
        className="min-w-40"
      />
    </div>
  );

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-y-12 2xl:gap-y-14">
          <div className="w-full flex flex-wrap justify-between items-center gap-x-2.5 gap-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {filterButtonItems.map((itm, i) => {
                const { label, minAmount, maxAmount } = itm;

                return (
                  <ButtonComponent
                    key={i}
                    medium
                    label={label}
                    primary={startAmount === minAmount && endAmount === maxAmount}
                    outline_secondary={!(startAmount === minAmount && endAmount === maxAmount)}
                    onClick={() => handlePriceFilter(minAmount, maxAmount)}
                  />
                );
              })}
            </div>

            <div
              className="relative flex justify-center items-center gap-2 p-0.5 bg-app_primary_f0/10 text-app_tertiary font-medium text-sm rounded-full cursor-pointer"
              onClick={openFilterOptions}
            >
              <span className="pl-3.5 w-20 truncate capitalize">
                {filterBy === "all" ? "All locations" : filterBy}
              </span>
              <button
                type="button"
                className="w-14 h-9 flex justify-center items-center font-medium text-xs bg-app_primary hover:bg-app_primary/70 text-white rounded-full"
                aria-label="filter by menu"
              >
                <Icons.filter size={24} />
              </button>

              {isOpen && (
                <div className="z-10 min-w-[210px] absolute top-12 right-[-4rem] lg:right-0 flex flex-col bg-white border border-app_gray_e9e shadow-sm p-1.5 rounded-xl">
                  {["all", "Yaba", "Lekki", "Ikeja", "FESTAC", "V.I", "Surulere"].map((city) => (
                    <button
                      key={city}
                      className="w-full text-start px-2.5 py-2 rounded-md hover:bg-app_primary_f0/10"
                      onClick={() => handleCityFilter(city)}
                    >
                      {city === "all" ? "All locations" : city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {isLoading ? (
            <LoadingSkeleton />
          ) : error ? (
            <EmptyState />
          ) : data?.data?.venue?.length > 0 ? (
            <>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-8">
                {data.data.venue.map((venue) => (
                  <HomeProductSingle key={venue.id} restaurants={venue} />
                ))}
              </div>
              {/* {data.data.venue.length === itemsPerPage && (
                <ButtonComponent
                  outline_secondary
                  label="View more"
                  onClick={() => setPage((prev) => prev + 1)}
                  className="min-w-40 bg-app_primary_f0/10 capitalize"
                />
              )} */}
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;
