import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import Link from "next/link";
import { PiBreadLight } from "react-icons/pi";
import styles from "./style.module.scss";
import ProjectCard from "@/components/projects/card/ProjectCard";

function Ongoing({ projects }) {
  console.log("🚀 ~ Ongoing ~ projects:", projects);
  return (
    <section className={styles.projects}>
      <div className={styles.main}>
        <div className={styles.boxes}>
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* <div className={styles.boxMobile}>
              <div className={styles.left}>
                <Image width={800} height={800} src="/project 1.jpg" alt="" />
                <div className={styles.tag}>
                  <div className={styles.icon}>
                  <PiBreadLight size={25} />
                  </div>
                  <div className={styles.text}>
                    <h4>FOOD OUTREACH</h4>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.top}>
                  <h2>Project: Feeding 10,000 People</h2>
                  <p>At MendAfrica we believe that access to food is a fundamental right. By offering these meals, we aim to alleviate food insecurity and foster a sense of belonging and support.  Join us in spreading kindness.</p>
                </div>
                <div className={styles.bottom}>
                 <div className={styles.partner}>
                 <h2>Partnership with: Access Bank</h2>
                 <Link href="">Give Again</Link>
                 </div>
                  <div className={styles.info}>
                  <div className={styles.ProgressBar}>
                  <ProgressBar progress={70} />
                    <div className={styles.impact}>
                      <h3>Total impact: 500</h3>
                      <h3>Goal: N10,000</h3>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className={styles.boxMobile}>
              <div className={styles.left}>
                <Image width={800} height={800} src="/project 1.jpg" alt="" />
                <div className={styles.tag}>
                  <div className={styles.icon}>
                  <PiBreadLight size={25} />
                  </div>
                  <div className={styles.text}>
                    <h4>FOOD OUTREACH</h4>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.top}>
                  <h2>Project: Feeding 10,000 People</h2>
                  <p>At MendAfrica we believe that access to food is a fundamental right. By offering these meals, we aim to alleviate food insecurity and foster a sense of belonging and support.  Join us in spreading kindness.</p>
                </div>
                <div className={styles.bottom}>
                 <div className={styles.partner}>
                 <h2>Partnership with: Access Bank</h2>
                 <Link href="">Give Again</Link>
                 </div>
                  <div className={styles.info}>
                  <div className={styles.ProgressBar}>
                  <ProgressBar progress={70} />
                    <div className={styles.impact}>
                      <h3>Total impact: 500</h3>
                      <h3>Goal: N10,000</h3>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default Ongoing;
