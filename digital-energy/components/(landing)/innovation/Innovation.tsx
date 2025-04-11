import "./styles.scss";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Innovation() {
  return (
    <>
      <div className="bg-white innovation">
        <div className="max-w-7xl mx-auto py-12 px-[5rem]">
          <div className="grid lg:grid-cols-2 gap-[5rem] items-center">
            {/* Image Section */}
            <div className="relative innovation-image">
              <Image
                src="/oil1.svg"
                alt="Workers on power transmission tower"
                className="object-cover h-[550px]"
               width={1000}
               height={1000}
              />
            </div>
            {/* Content Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">
                Our Innovations
              </h2>

              <p className="text-slate-700 text-[16px]">
                DIGITAL ENERGY relies heavily on internal solutions in
                optimizing duration and exemplary performance in all activities
                of the different sectors of operations coupled with meeting
                expectations of Clients related to time and cost effectiveness.
              </p>
              <div className="space-y-5 text-[16px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-2 bg-red-600 mt-2"></div>
                  <div>
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">
                        Pipeline and Piping:
                      </span>
                      CAD and 3D Modeling, Pipeline Alignment Sheets and Profile
                      Design Programs, Smart P&ID, Stress Analysis (Ceasar II)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-2 bg-red-600 mt-2"></div>
                  <div>
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">
                        Process simulations and Hydraulic Modeling:
                      </span>
                      Aspenone suite (HYSYS), OLGA 2000, Pipeline Studio
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-2 bg-red-600 mt-2"></div>
                  <div>
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">
                        INSTRUMENTATION:{" "}
                      </span>
                      INTOOLS, OLGA 2000, (Smart Plant Instrumentation)
                    </p>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                <FaCloudDownloadAlt className="w-5 h-5" />
                Download Company Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
