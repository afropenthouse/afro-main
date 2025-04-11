import Image from "next/image";
import Link from "next/link";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { LiaCommentsSolid } from "react-icons/lia";
import './style.scss'
import { FaStar } from "react-icons/fa";

export default function page() {
  return (
    <main className="main">
      <div className="title">
        <h1>Found 50 Mentors</h1>
      </div>
      <div className="category">
        <h1>Category</h1>
      </div>
      <div className="main-content">
      <aside className="aside">
        <div className="first">
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>All</h1>
            <p>(210)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Research</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Target Audience</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Trend </h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Social Media</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Digital</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Affiliate</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
          <div className="cate">
            <MdCheckBoxOutlineBlank color="#262728" />
            <h1>Market Strategy</h1>
            <p>(52)</p>
          </div>
        </div>
        <div className="second">
          <h1>Experience</h1>
          <div className="box">
            <div className="cate">
              <MdCheckBoxOutlineBlank color="#262728" />
              <h1>2-4</h1>
              <p>Years</p>
            </div>
            <div className="cate">
              <MdCheckBoxOutlineBlank color="#262728" />
              <h1>2-4</h1>
              <p>Years</p>
            </div>
            <div className="cate">
              <MdCheckBoxOutlineBlank color="#262728" />
              <h1>2-4</h1>
              <p>Years</p>
            </div>
            <div className="cate">
              <MdCheckBoxOutlineBlank color="#262728" />
              <h1>2-4</h1>
              <p>Years</p>
            </div>
            <div className="cate">
              <MdCheckBoxOutlineBlank color="#262728" />
              <h1>2-4</h1>
              <p>Years</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="main">
        <Link href="/profile">
        <div className="box">
          <div className="first">
            <div className="profile-img">
              <Image src="/profile.svg" width={200} height={200} alt="" />
            </div>
            <div className="about">
              <h1>Market Strategist</h1>
              <p>Abc Company</p>
              <p>7 years of experience</p>
              <p>10 people received help</p>
            </div>
          </div>
          <div className="second">
            <div className="description">
             <div className="top">
             <h1>John Doe</h1>
              <div className="stars">
              <FaStar color="#ECA118"  />
              <p>4.5</p>
              </div>
             </div>
              <p>
                I am a results-driven marketing strategist with a passion for
                crafting innovative campaigns that drive growth and brand
                awareness. With expertise in digital marketing, consumer
                behavior analysis & market research, I help businesses build
                strong connections with their target audiences, optimize
                engagement, & achieve sustainable success. Read more
              </p>
            </div>
            <div className="tags">
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Target Audience</h1>
                </div>
                <div className="tag">
                    <h1>Market Research</h1>
                </div>
                <div className="tag">
                    <h1>Trend </h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
            </div>
          </div>
          <div className="third">
            <div className="title">
                <h1>N3,500 / hour</h1>
            </div>
            <div className="points">
                <div className="point">
                    <div className="dot"></div>
                    <p>First 10 free sessions available</p>
                </div>
               
                <div className="point">
                    <div className="dot"></div>
                    <p>Meet-ups available (Lagos)</p>
                </div>
                <div className="point">
                    <div className="dot"></div>
                    <p>Meet-ups available (Lagos)</p>
                </div>
               
            </div>
            <div className="profile">
                <div className="top">
                    <Link href="">View Profile</Link>
                    <LiaCommentsSolid size={25} color="#262728" />
                    <FaSquareFacebook size={25} color="#262728"/>
                </div>
                <div className="bottom">
                    <a href="">Send A request</a>
                </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="first">
            <div className="profile-img">
              <Image src="/profile.svg" width={200} height={200} alt="" />
            </div>
            <div className="about">
              <h1>Market Strategist</h1>
              <p>Abc Company</p>
              <p>7 years of experience</p>
              <p>10 people received help</p>
            </div>
          </div>
          <div className="second">
            <div className="description">
             <div className="top">
             <h1>John Doe</h1>
              <div className="stars">
              <FaStar color="#ECA118"  />
              <p>4.5</p>
              </div>
             </div>
              <p>
                I am a results-driven marketing strategist with a passion for
                crafting innovative campaigns that drive growth and brand
                awareness. With expertise in digital marketing, consumer
                behavior analysis & market research, I help businesses build
                strong connections with their target audiences, optimize
                engagement, & achieve sustainable success. Read more
              </p>
            </div>
            <div className="tags">
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Target Audience</h1>
                </div>
                <div className="tag">
                    <h1>Market Research</h1>
                </div>
                <div className="tag">
                    <h1>Trend </h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
                <div className="tag">
                    <h1>Stakeholders</h1>
                </div>
            </div>
          </div>
          <div className="third">
            <div className="title">
                <h1>N3,500 / hour</h1>
            </div>
            <div className="points">
                <div className="point">
                    <div className="dot"></div>
                    <p>First 10 free sessions available</p>
                </div>
               
                <div className="point">
                    <div className="dot"></div>
                    <p>Meet-ups available (Lagos)</p>
                </div>
                <div className="point">
                    <div className="dot"></div>
                    <p>Meet-ups available (Lagos)</p>
                </div>
               
            </div>
            <div className="profile">
                <div className="top">
                    <Link href="">View Profile</Link>
                    <LiaCommentsSolid size={25} color="#262728" />
                    <FaSquareFacebook size={25} color="#262728"/>
                </div>
                <div className="bottom">
                    <a href="">Send A request</a>
                </div>
            </div>
          </div>
        </div>
        </Link>
        
      </main>
      </div>
    </main>
  );
}
