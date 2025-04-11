"use client";
import Image from "next/image";
import { PiBreadLight } from "react-icons/pi";
import ProgressBar from "../../ProgressBar";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useModalStore } from "@/store";
import { usePaymentStore } from "@/store";
import { motion } from "framer-motion";
import { FaShareAlt, FaLink } from "react-icons/fa";

import { Mukta_Vaani } from "next/font/google";
import { useState } from "react";

const mukta = Mukta_Vaani({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function ProjectCard({ project }) {
  console.log(`this is projects project`, project);
  const { ispaymentModalOpen, toggleIspaymentModalOpen } = useModalStore();
  const { setPayment } = usePaymentStore();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareUrl = window.location.origin;

    if (navigator.share) {
      navigator
        .share({
          title: "Support Transformative Projects Across Africa on MendAfrica",
          text: `Discover the incredible impact of this project "${project.title}" on MendAfrica. Join me in making a real difference today!`,
          url: shareUrl,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`${styles.projectBox} ${mukta.className}`}
      >
        <div className={styles.left}>
          <Image width={800} height={800} src={project.image} alt="" />
          <div className={styles.tag}>
            <div className={styles.text}>
              <h4>{project.category}</h4>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2>{project.title}</h2>
            <p>{project.about}</p>
            <div className={styles.impactMetrics}>
              <div className={styles.impactAmount}>
                <span>Amount per impact:</span>
                <strong>₦{project.amountPerImpact}</strong>
              </div>
              <div className={styles.shareSection}>
                {/* {project.hasUserDonated && (
                  <div className={styles.myImpact}>
                    My Impact:{" "}
                    <span>
                      {" "}
                      {project?.goal && project.achievedGoal
                        ? ((+project.fimpact / +project.goal) * 100).toFixed(2)
                        : 0}
                      %
                    </span>
                  </div>
                )} */}
                <button
                  className={styles.shareButton}
                  onClick={handleShare}
                  title={copied ? "Copied!" : "Share Project"}
                >
                  <FaShareAlt size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.partner}>
              <h2>Partnership with:</h2>
              <Link href={"/"} className={styles.partnerLink}>
                <FaLink />
                <h4>{project.partner}</h4>
              </Link>
            </div>
            <div className={styles.info}>
              <div className={styles.ProgressBar}>
                <ProgressBar
                  progress={
                    project?.goal && project.achievedGoal
                      ? ((+project.achievedGoal / +project.goal) * 100).toFixed(
                          2
                        )
                      : 0
                  }
                />
                <div className={styles.impact}>
                  <h3>
                    Total impact:{" "}
                    {project?.goal && project.achievedGoal
                      ? ((+project.achievedGoal / +project.goal) * 100).toFixed(
                          2
                        )
                      : 0}
                    %
                  </h3>
                  <h3>Goal: {project.goal}</h3>
                </div>
              </div>
              {project.status === "ONGOING" ? (
                <button
                  onClick={() => {
                    toggleIspaymentModalOpen();
                    setPayment(project.title, project.id);
                  }}
                >
                  Give Now
                  {/* {project.hasUserDonated ? " Give again" : "Give Now"} */}
                </button>
              ) : (
                <button>Completed</button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`${styles.projectBoxMobile} ${mukta.className}`}
      >
        <div className={styles.left}>
          <Image width={800} height={800} src={project.image} alt="" />
          <div className={styles.tag}>
            <div className={styles.text}>
              <h4>{project.category}</h4>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2>Project: {project.title}</h2>
            <p>{project.about}</p>
            <div className={styles.impactMetrics}>
              <div className={styles.impactAmount}>
                <span>Amount per impact:</span>
                <strong>₦{project.amountPerImpact}</strong>
              </div>
              {/* {project.hasUserDonated && (
                  <div className={styles.myImpact}>
                    My Impact:{" "}
                    <span>
                      {" "}
                      {project?.goal && project.achievedGoal
                        ? ((+project.fimpact / +project.goal) * 100).toFixed(2)
                        : 0}
                      %
                    </span>
                  </div>
                )} */}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.partner}>
              <div className={styles.partnerMobile}>
                <h2>Partnership with:</h2>
                <Link href={"/"} className={styles.partnerLink}>
                  <FaLink />
                  <h4>{project.partner}</h4>
                </Link>
              </div>
              {project.status === "ONGOING" ? (
                <button
                  onClick={() => {
                    toggleIspaymentModalOpen();
                    setPayment(project.title, project.id);
                  }}
                >
                  Give Now
                  {/* {project.hasUserDonated ? " Give again" : "Give Now"} */}
                </button>
              ) : (
                <button>Completed</button>
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.ProgressBar}>
                <ProgressBar
                  progress={
                    project?.goal && project.achievedGoal
                      ? ((+project.achievedGoal / +project.goal) * 100).toFixed(
                          2
                        )
                      : 0
                  }
                />
                <div className={styles.impact}>
                  <h3>
                    Total impact:{" "}
                    {project?.goal && project.achievedGoal
                      ? ((+project.achievedGoal / +project.goal) * 100).toFixed(
                          2
                        )
                      : 0}
                    %
                  </h3>
                  <h3>Goal: {project.goal}</h3>
                </div>
              </div>
            </div>
            <div className={`${styles.info} ${styles.shareSection}`}>
              <div className={styles.myImpact}>
               
              </div>
              <button
                className={styles.shareButton}
                onClick={handleShare}
                title={copied ? "Copied!" : "Share Project"}
              >
                <FaShareAlt size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
