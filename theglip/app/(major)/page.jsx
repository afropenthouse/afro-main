import Image from "next/image";
import "../../styles/main.scss";
import { IoIosCheckmark } from "react-icons/io";
import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="main">
        <section className="about" id="about">
          <div className="box">
            <div className="left">
              <div className="top">
                <h1>
                  Unlock Potential. Build Connections. Shape Africa's Future.
                </h1>
              </div>
              <div className="bottom">
                <h1>
                  The Glip brings together Africa’s brightest minds, connecting
                  mentors and mentees to inspire growth, share knowledge, and
                  create lasting impact across the continent.
                </h1>
                <div className="points">
                  <div className="point">
                    <div className="icon">
                      <Image src="/people.svg" alt="" width={30} height={30} />
                    </div>
                    <h3>Interactive Communities</h3>
                    <p>
                      Join real communities of professionals and leaders across
                      Africa, where you can exchange ideas, collaborate on
                      projects, and grow together through shared experiences and
                      mentorship
                    </p>
                  </div>
                  <div className="point">
                    <div className="icon">
                      <Image
                        src="/calendar-tick.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                    <h3>Interactive Communities</h3>
                    <p>
                      Join real communities of professionals and leaders across
                      Africa, where you can exchange ideas, collaborate on
                      projects, and grow together through shared experiences and
                      mentorship
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Image src="/image 7.svg" alt="" width={500} height={500} />
            </div>
          </div>
          <div className="box2">
            <div className="right">
              <Image src="/image 7.svg" alt="" width={500} height={500} />
            </div>
            <div className="left">
              <div className="top">
                <h1>
                  Unlock Potential. Build Connections. Shape Africa's Future.
                </h1>
              </div>
              <div className="bottom">
                <h1>
                  The Glip brings together Africa’s brightest minds, connecting
                  mentors and mentees to inspire growth, share knowledge, and
                  create lasting impact across the continent.
                </h1>
                <div className="points">
                  <div className="point">
                    <div className="icon">
                      <Image src="/people.svg" alt="" width={30} height={30} />
                    </div>
                    <h3>Interactive Communities</h3>
                    <p>
                      Join real communities of professionals and leaders across
                      Africa, where you can exchange ideas, collaborate on
                      projects, and grow together through shared experiences and
                      mentorship
                    </p>
                  </div>
                  <div className="point">
                    <div className="icon">
                      <Image
                        src="/calendar-tick.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                    <h3>Interactive Communities</h3>
                    <p>
                      Join real communities of professionals and leaders across
                      Africa, where you can exchange ideas, collaborate on
                      projects, and grow together through shared experiences and
                      mentorship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StepsSection />
        <VideoSection />
        <section className="pricing">
          <div className="title">
            <h1>Pricing</h1>
            <p>
              Choose a plan that fits your mentorship needs, whether you're just
              starting or seeking long-term guidance.
            </p>
          </div>
          <div className="main">
            <div className="box1">
              <div className="top">
                <h1>Free Plan: Starter</h1>
                <p>Start at</p>
                <p>
                  <span>$0</span> / Month
                </p>
                <p>Simple, Basic </p>
              </div>
              <div className="bottom">
                <div className="point">
                  <IoIosCheckmark />
                  <p>Access to a limited number of mentors and mentees</p>
                </div>
                <div className="point">
                  <IoIosCheckmark />
                  <p>Smart scheduling for up to 3 sessions per month</p>
                </div>
                <div className="point">
                  <IoIosCheckmark />
                  <p>Basic profile visibility within the community</p>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="top">
                <h1>Paid Plan: Pro</h1>
                <p>Start at</p>
                <p>
                  <span>$15</span> / Month
                </p>
                <p>Simple, Basic </p>
              </div>
              <div className="bottom">
                <div className="point">
                  <IoIosCheckmark />
                  <p>Unlimited mentor/mentee connections across all industries</p>
                </div>
                <div className="point">
                  <IoIosCheckmark />
                  <p>Priority access to top-rated mentors</p>
                </div>
                <div className="point">
                <IoIosCheckmark size={30} />
                  <p>Advanced smart scheduling with unlimited sessions and personalized calendar sync</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
