import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RiLinksFill } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <main className="main">
      {/* Profile Main */}
      <section className="profile">
        <div className="left">
          <div className="about">
            <h2>John Doe</h2>
            <h1>Experienced Marketing Strategist</h1>
            <p>
              I am a results-driven marketing strategist with a passion for
              crafting innovative campaigns that drive growth and brand
              awareness. With expertise in digital marketing, consumer behavior
              analysis, and market research, I help businesses build strong
              connections with their target audiences, optimize engagement, and
              achieve sustainable success.
            </p>
          </div>
          <div className="links">
            <div className="left">
              <h1>Follow John Doe</h1>
              <div className="icons">
                <FaFacebookF color="#BBD1EA" />
                <FaInstagram color="#BBD1EA" />
                <IoLogoTwitter color="#BBD1EA" />
              </div>
            </div>
            <div className="right">
              <Link href="">Book an appointment</Link>
            </div>
          </div>
        </div>
        <div className="right">
          <Image
            src="/image 12.png"
            alt=""
            width={350}
            height={350}
            quality={100}
          />
        </div>
      </section>

      {/* Biography */}
      <section className="biography">
        <div className="top">
          <h1>Biography</h1>
          <p>
            As an experienced marketing strategist, I specialize in creating
            data-driven, innovative campaigns that deliver measurable results.
            With a deep understanding of digital marketing, consumer psychology,
            and brand development, I’ve helped businesses enhance their market
            presence and engage more effectively with their target audiences. My
            expertise spans across market research, content strategy, and social
            media management, allowing me to craft personalized marketing
            solutions that drive growth and long-term success. I’m passionate
            about staying ahead of industry trends, using insights to optimize
            campaigns, and building strong, lasting connections between brands
            and consumers.
          </p>
        </div>
        <div className="middle">
          <h1>Unlock Your Next Big Opportunity with Expert Guidance!</h1>
          <p>
            Imagine having someone by your side who has been through the
            challenges you're facing right now—someone who not only gets it but
            knows exactly how to help you break through. That’s where I come in.
            As a seasoned marketing strategist and creative thinker, I’ve walked
            the path of navigating complex markets, building strong brands, and
            crafting winning strategies. I know the pitfalls, the shortcuts, and
            the untapped opportunities. Booking an appointment with me means you
            get more than advice—you get actionable insights, practical tools,
            and a clear plan to elevate your career or business. Let’s take your
            ideas and turn them into success stories together! Your next
            breakthrough is just one conversation away.
          </p>
        </div>
        <div className="bottom">
          <h1>Personal Inf0</h1>
          <div className="links">
            <div className="icon">
              <GrLocation />
              <p>Johndoe.com</p>
            </div>
            <div className="icon">
              <TbMessage />
              <p>Johndoe@example.com</p>
            </div>
            <div className="icon">
              <RiLinksFill />
              <p>Johndoe.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
      <div className="title">
          <h1>Work Experience</h1>
        </div>
       <div className="main">
       <div className="experiences">
          <div className="top">
            <h1>CEO, ABC Compan</h1>
            <p>January 2020 – Present</p>
          </div>
          <div className="summary">
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
          </div>
          <div className="achievement">
            <div className="key">
              <h1>Key Achievments</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  Revenue Growth: Increased annual revenue by 150% within three
                  years through the implementation of targeted marketing
                  strategies and expansion into new markets.
                </li>
                <li>
                  Product Development: Launched three successful product lines
                  that addressed emerging customer needs, resulting in a 40%
                  increase in customer acquisition.
                </li>
                <li>
                  Team Expansion: Grew the team from 50 to over 120 employees,
                  enhancing operational efficiency and building a strong company
                  culture focused on creativity and inclusivity.
                </li>
                <li>
                  Sustainability Initiatives: Introduced eco-friendly practices
                  that reduced operational waste by 30% and positioned ABC
                  Company as a leader in corporate social responsibility.
                </li>
                <li>
                  Strategic Partnerships: Forged key partnerships with industry
                  leaders, enhancing brand visibility and expanding our reach in
                  the market.
                </li>
              </ul>
            </div>
            <div className="bottom">
              <p>
                Under my leadership, ABC Company has not only achieved
                significant financial milestones but also established a strong
                reputation for innovation and excellence in our industry.
              </p>
            </div>
          </div>
        </div> <div className="experiences">
          <div className="top">
            <h1>CEO, ABC Compan</h1>
            <p>January 2020 – Present</p>
          </div>
          <div className="summary">
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
          </div>
          <div className="achievement">
            <div className="key">
              <h1>Key Achievments</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  Revenue Growth: Increased annual revenue by 150% within three
                  years through the implementation of targeted marketing
                  strategies and expansion into new markets.
                </li>
                <li>
                  Product Development: Launched three successful product lines
                  that addressed emerging customer needs, resulting in a 40%
                  increase in customer acquisition.
                </li>
                <li>
                  Team Expansion: Grew the team from 50 to over 120 employees,
                  enhancing operational efficiency and building a strong company
                  culture focused on creativity and inclusivity.
                </li>
                <li>
                  Sustainability Initiatives: Introduced eco-friendly practices
                  that reduced operational waste by 30% and positioned ABC
                  Company as a leader in corporate social responsibility.
                </li>
                <li>
                  Strategic Partnerships: Forged key partnerships with industry
                  leaders, enhancing brand visibility and expanding our reach in
                  the market.
                </li>
              </ul>
            </div>
            <div className="bottom">
              <p>
                Under my leadership, ABC Company has not only achieved
                significant financial milestones but also established a strong
                reputation for innovation and excellence in our industry.
              </p>
            </div>
          </div>
        </div>
       </div>
      </section>
      {/* Testimonial */}
      <section className="testimonial">
       <div className="container">
       <div className="title">
          <h1>Testimonials</h1>
        </div>
        <div className="main">
            <div className="image">
              <Image src="/woman.png" width={300} height={300} alt="" />
            </div>
            <div className="slider">
              <div className="top">
                <div className="quote">
                  <Image src="/quote-up.svg" alt="" width={50} height={50} />
                </div>
                <p>
                  Working with John Doe as my mentor in marketing strategy has
                  been a transformative experience. His deep expertise and
                  insightful guidance helped me refine my skills and develop
                  effective marketing campaigns. John's ability to break down
                  complex concepts into actionable steps made all the
                  difference. I highly recommend him to anyone looking to
                  elevate their marketing game
                </p>
              </div>
              <div className="middle">
                <h1>John Doe</h1>
                <p>Marketing Strategist,</p>
                <p>AB Technologies</p>
              </div>
              <div className="bottom">
                <div className="control"><MdKeyboardArrowLeft size={20} /></div>
                <div className="control"><MdKeyboardArrowRight size={20} /></div>
              </div>
            </div>
          </div>
       </div>
      </section>
      {/* Blog */}

      <section className="blog">
        <h1>From Blog Post</h1>
       <div className="main">
       <div className="blogs">
          <div className="left">
          <Image
            src="/46c8c4c3c5cf960c0e64c09564df8248.png"
            alt=""
            width={350}
            height={350}
            quality={100}
          />
          </div>
          <div className="right">
            <h1>
              THE ULTIMATE GUIDE TO A SUCCESSFUL MARKETING STRATEGY IN 2024
            </h1>
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
            <div className="more">
              <p>Read more</p>
              <div className="icon">
               <Image src="/Arrow 1.svg" alt="" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
       <div className="blogs">
          <div className="left">
          <Image
            src="/46c8c4c3c5cf960c0e64c09564df8248.png"
            alt=""
            width={350}
            height={350}
            quality={100}
          />
          </div>
          <div className="right">
            <h1>
              THE ULTIMATE GUIDE TO A SUCCESSFUL MARKETING STRATEGY IN 2024
            </h1>
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
            <div className="more">
              <p>Read more</p>
              <div className="icon">
               <Image src="/Arrow 1.svg" alt="" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
       <div className="blogs">
          <div className="left">
          <Image
            src="/46c8c4c3c5cf960c0e64c09564df8248.png"
            alt=""
            width={350}
            height={350}
            quality={100}
          />
          </div>
          <div className="right">
            <h1>
              THE ULTIMATE GUIDE TO A SUCCESSFUL MARKETING STRATEGY IN 2024
            </h1>
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
            <div className="more">
              <p>Read more</p>
              <div className="icon">
               <Image src="/Arrow 1.svg" alt="" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
       <div className="blogs">
          <div className="left">
          <Image
            src="/46c8c4c3c5cf960c0e64c09564df8248.png"
            alt=""
            width={350}
            height={350}
            quality={100}
          />
          </div>
          <div className="right">
            <h1>
              THE ULTIMATE GUIDE TO A SUCCESSFUL MARKETING STRATEGY IN 2024
            </h1>
            <p>
              As the CEO of ABC Company, I have successfully led the
              organization through transformative growth while fostering a
              culture of innovation and collaboration. My responsibilities
              included overseeing all aspects of the business, from strategic
              planning to operations and team management.
            </p>
            <div className="more">
              <p>Read more</p>
              <div className="icon">
               <Image src="/Arrow 1.svg" alt="" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
       </div>
      </section>
      {/* Subscribe */}
      
    </main>
  );
}
