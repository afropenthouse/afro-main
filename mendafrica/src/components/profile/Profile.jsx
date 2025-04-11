"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./style.scss";
import Chart from "../chart/Chart";
import { currentClientUser } from "@/helpers/current-client-user";
import { FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { useProfileStore, useModalStore } from "@/store";
import { getUserDonations } from "@/actions/project";
import { getUserGoals } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";
import { useGoalStore } from "@/store";
import { motion } from "framer-motion";

const UserProfile = ({ user, hasGoals }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    easing: "ease-out",
  };

  const { targetLives, period } = useGoalStore();
  const currentUser = currentClientUser();
  const { data: userDonations } = useQuery({
    queryKey: ["userDonationStats"],
    queryFn: async () => {
      const result = await getUserDonations(currentUser.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },
    refetchOnMount: true,
  });
  const { data: userGoals } = useQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      const result = await getUserGoals(currentUser.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result.success;
    },
    refetchOnMount: true,
  });

  // console.log(`userDonationStats`, userDonationStats)
  // console.log(`userGoals`, userGoals)
  const setCredentials = useProfileStore((state) => state.setCredentials);
  const username = useProfileStore((state) => state.username);
  const { toggleGoalModal, openGoalProgressModal, closeGoalProgressModal } =
    useModalStore();
  // Simple store of user info if we have user data and no username stored
  if (user && !username) {
    setCredentials(
      user.firstName || user.name.split(" ")[0],
      user.email,
      user.image
    );
  }

  return (
    <motion.section
      className="profile"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="greet">
        <div>
          <h1>Hey, {user?.firstName || user?.name?.split(" ")[0]}</h1>
          <p>Here's today's impact—made possible by you.</p>
        </div>
        {hasGoals || targetLives ? (
          <div className="button" onClick={() => openGoalProgressModal()}>
            <GoGoal color="#EBCC48" size={20} />
            <button className="primary-button">Goal in progress...</button>
          </div>
        ) : (
          <div className="button" onClick={() => toggleGoalModal()}>
            <GoGoal color="#EBCC48" size={20} />
            <button className="primary-button">Set New Goal</button>
          </div>
        )}
      </div>
      <div className="stats">
        <div className="left">
          <div className="chart">
            <Chart goals={userGoals} impact={Number(userDonations?.totalStats.impact)} />
          </div>
          <div className="stat">
            <div className="box">
              <FaHandHoldingHeart className="icon two" />
              <h1>My Givings</h1>
            </div>
            <div className="box">
              <FaUsers className="icon one" />
              <h1>My Impact</h1>
            </div>
            <div className="box">
              <BsGraphUp className="icon three" />
              <h1>Total Project Impact</h1>
            </div>
          </div>
        </div>
        <div className="right">
        <h1>
  ₦
  {Number(userDonations?.totalStats.amount) >= 1_000_000
    ? (Number(userDonations?.totalStats.amount) / 1_000_000).toFixed(2) + 'M'
    : Number(userDonations?.totalStats.amount) >= 1000
    ? (Number(userDonations?.totalStats.amount) / 1000).toFixed(2) + 'K'
    : Number(userDonations?.totalStats.amount).toLocaleString('en-NG')}
</h1>   
          <h1>{Number(userDonations?.totalStats.impact)}</h1>
          <h1>{Number(userDonations?.totalStats.totalAchievedGoal)}</h1>
        </div>
      </div>
      {hasGoals ? (
        <div className="buttonMobile" onClick={() => openGoalProgressModal()}>
          <GoGoal color="#EBCC48" size={20} />
          <button className="primary-button">Goal in progress...</button>
        </div>
      ) : (
        <div className="buttonMobile" onClick={() => toggleGoalModal()}>
          <GoGoal color="#EBCC48" size={20} />
          <button className="primary-button">Set New Goal</button>
        </div>
      )}
      <div className="goals">
        <div className="left-goals">
          <div className="box">
            <div className="dot goal-dot"></div>
            <h1>
              My Goal -{" "}
              {Array.isArray(userGoals) && userGoals.length > 0
                ? userGoals[0].targetLives
                : targetLives || 0}
            </h1>
          </div>
          <div className="box">
            <div className="dot achieved-dot"></div>
            <h1>
              Goal Achieved -{" "}
              {Array.isArray(userGoals) && userGoals.length > 0
                ? Number(userDonations?.totalStats.impact)
                : 0}
            </h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UserProfile;
