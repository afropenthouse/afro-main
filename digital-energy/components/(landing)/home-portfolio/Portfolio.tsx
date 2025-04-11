import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "./styles.scss";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
     <div className="homePortfolioContainer">
     <section className="homePortfolio">
        <div className="left">
          <div className="imageContainer">
            <Image width={800} height={800} src="/dre1.svg" alt="" />
            <div className="control">
            <GoChevronLeft className="left icon" />
            <GoChevronRight className="right icon" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
           <div>
           <h2>PORTFOLIO</h2>
           <h1>Dredging Works</h1>
           </div>
            <p>
              Dredging in the energy oil sector involves removing sediment and
              debris from water bodies to ensure safe access for vessels and
              support offshore infrastructure like oil platforms and pipelines.
              It helps maintain navigable channels and protect the environment,
              using specialized techniques like hydraulic or mechanical dredging
              to meet project needs.
            </p>
          </div>
          <div className="bottom">
            <div className="points">
              <div className="mark"></div>
              <p>Surveying</p>
            </div>
            <div className="points">
              <div className="mark"></div>
              <p>Maintenance</p>
            </div>
            <div className="points">
              <div className="mark"></div>
              <p>Excavation</p>
            </div>
            <div className="points">
              <div className="mark"></div>
              <p>Disposal</p>
            </div>
            <div className="points">
              <div className="mark"></div>
              <p>Management</p>
            </div>
            <div className="points">
              <div className="mark"></div>
              <p>Transporting</p>
            </div>
          </div>
        </div>
      </section>
      <div className="homePortfolioBg"></div>
     </div>
    </>
  );
}
