"use client";
import Link from "next/link";
import Image from "next/image";
import right_arrow from "../../public/mdi-light_chevron-down.png";
import { useState } from "react";
import google from "../../public/devicon_google.jpg";
import email_img from "../../public/mail.jpg";
import lock_img from "../../public/lock.png";
import styles from "../(auth)/connect-with-us/styles.module.scss";

export default function Sign_up_modal() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={styles.row4}>
        <form className="flex flex-col gap-[20px]">
          <div className={styles.form1}>
            <label htmlFor="email"></label>
            <Image
              style={{
                maxHeight: "30px",
                alignSelf: "center",
              }}
              src={email_img}
              alt=""
              width={30}
              height={30}
            />
            <input
              name="email"
              type="email"
              id="email"
              className="w-full h-[46px] outline-none focus:outline-none px-3"
              placeholder="Email"
            />
          </div>
          <div className={styles.form1}>
            <label htmlFor="password"></label>
            <Image
              style={{
                maxHeight: "30px",
                alignSelf: "center",
              }}
              src={lock_img}
              alt=""
              width={30}
              height={30}
            />
            <input
              name="password"
              type="password"
              id="password"
              className="w-full h-[46px] outline-none focus:outline-none px-3"
              placeholder="Password"
            />
          </div>
          <div className={styles.form3}>
            <h1>Forgot Password?</h1>
            <Link href="/">Click Here</Link>
          </div>
        </form>
      </div>
    </>
  );
}
