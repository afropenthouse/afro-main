const CompanyProfileDisplay = () => {
  const data = [
    {
      LIST_OF_CLIENT: "TSKJ",
      DATE_PERFORMED: "2006",
      WHERE_PERFORMED: "FOUNDATION & INSTALLATION OF WAREHOUSE",
      TOTAL_VALUE_OF_CONTRACT: 83455000.0,
      NAME_POSITION_OF_CLIENT_REP: "RAY SEDWICK RESIDENT MANAGER",
    },
    {
      LIST_OF_CLIENT: "TSKJ",
      DATE_PERFORMED: "2006",
      WHERE_PERFORMED:
        "CONCRETE FOUNDATION AND INSTALLATION OF RED SEA OFFICE PORTA CABINS FOR CBSL, NLLG SITE",
      TOTAL_VALUE_OF_CONTRACT: 28905000.0,
      NAME_POSITION_OF_CLIENT_REP: "TONY FINCH PROJECT MANAGER",
    },
    {
      LIST_OF_CLIENT: "TSKJ",
      DATE_PERFORMED: "2006",
      WHERE_PERFORMED:
        "SEWAGE WATER HDPE PIPING WORK AND INSTALLATION OF MANHOLE /SUBMESIBLE PUMPS",
      TOTAL_VALUE_OF_CONTRACT: 63442000.0,
      NAME_POSITION_OF_CLIENT_REP: "JOHN OFLEN CONSTRUCTION MANAGER",
    },
    {
      LIST_OF_CLIENT: "TSKJ-NLNG",
      DATE_PERFORMED: "2007",
      WHERE_PERFORMED:
        "CONSTRUCTION OF 255M CONCRETE ROAD WITH DRAIN FOR AKIMA COMMUNITY",
      TOTAL_VALUE_OF_CONTRACT: 22677500.0,
      NAME_POSITION_OF_CLIENT_REP: "GEORGE MCKENA COMMUNITY PROJECTS MANAGER",
    },
    {
      LIST_OF_CLIENT: "TSKJ-NLNG",
      DATE_PERFORMED: "2007",
      WHERE_PERFORMED: "SAND CEMENT STABILIZATION OF TANK LAYDOWN AREA",
      TOTAL_VALUE_OF_CONTRACT: 3227000.0,
      NAME_POSITION_OF_CLIENT_REP: "MORGAN ORIAHI CONSTTN. SUPR.",
    },
    {
      LIST_OF_CLIENT: "IDASO-SAIPEM CONTRACTING, ZEBRA GOLD NAOC",
      DATE_PERFORMED: "01/01/12",
      WHERE_PERFORMED: "CIVIL WORKS FOR OML 58 PROJECT, OBITE CAMP",
      TOTAL_VALUE_OF_CONTRACT: 29283400.0,
      NAME_POSITION_OF_CLIENT_REP: "TIMOTHY MESHILAYE CONTRACTS MANAGER",
    },
    {
      LIST_OF_CLIENT: "IDASO-SAIPEM CONTRACTING, ZEBRA GOLD NAOC",
      DATE_PERFORMED: "01/07/12",
      WHERE_PERFORMED:
        "LAND PREPARATION FOR LOCATION OF LAND RIG/INFRASTRUCTURES:MGBEDE & OBIAFU LOCATIONS",
      TOTAL_VALUE_OF_CONTRACT: 428000.0,
      NAME_POSITION_OF_CLIENT_REP: "PAPI MONITE OPERATIONS MANAGER",
    },
    {
      LIST_OF_CLIENT: "TOTAL E&P",
      DATE_PERFORMED: "01/11/13",
      WHERE_PERFORMED: "PROCUREMENT OF",
      TOTAL_VALUE_OF_CONTRACT: 34232.97,
      NAME_POSITION_OF_CLIENT_REP: "CHINEDU OBI",
    },
    {
      LIST_OF_CLIENT: "NLNG",
      DATE_PERFORMED: "03/2/2012",
      WHERE_PERFORMED:
        "AKIAMA WATER RETICULATION PROJECT: CONSTRUCTION OF ACCESS CONCRETE ROAD; WATER STATION AND BOND WALL",
      TOTAL_VALUE_OF_CONTRACT: 106872000.0,
      NAME_POSITION_OF_CLIENT_REP:
        "EDWARD NAMIBISMAGH A COMMUNITY PROJECT MANAGER",
    },
    {
      LIST_OF_CLIENT: "NAOC",
      DATE_PERFORMED: "09/10/2012",
      WHERE_PERFORMED:
        "REINF. CONCRETE FENCE EX ABB & 16NO. BULLET-PROOF WINDOWS EX ABB TRANSIT CAMP, EPOCHA",
      TOTAL_VALUE_OF_CONTRACT: 1563000.0,
      NAME_POSITION_OF_CLIENT_REP: "MR. BRIGHT ISIORO PROJECT CORDINATORNAOOC",
    },
    {
      LIST_OF_CLIENT: "NHD LIMITED - BAYELSA STATE GOVT",
      DATE_PERFORMED: "01/01/13",
      WHERE_PERFORMED:
        "DESIGN AND CONST. OF POLO FACILITY FOR BAYELSA STATE GOVERNMENT",
      TOTAL_VALUE_OF_CONTRACT: 3043000000.0,
      NAME_POSITION_OF_CLIENT_REP: "MIKE IGWE CONTRACT ADMINISTRATOR",
    },
    {
      LIST_OF_CLIENT: "TOTAL GULF LIMITED, USA",
      DATE_PERFORMED: "01/01/14",
      WHERE_PERFORMED:
        "DREDGING, HAUL,EXCAV OF LAKES FOR GOLF COURSE IN YANEGOA",
      TOTAL_VALUE_OF_CONTRACT: 91158000.0,
      NAME_POSITION_OF_CLIENT_REP: "JEFF BREWSTER VICE PRESIDENT",
    },
    {
      LIST_OF_CLIENT: "AMAZON ENERGY",
      DATE_PERFORMED: "05/07/2016",
      WHERE_PERFORMED:
        'INSTALLATION OF 1KM 24" GAS PIPELINE FOR NGC AKRI-RIVER NIGER',
      TOTAL_VALUE_OF_CONTRACT: 668907000.0,
      NAME_POSITION_OF_CLIENT_REP: "RAROS ITHIRIIPE CONSTR MANAGER",
    },
    {
      LIST_OF_CLIENT: "AMEX DIAGNOSTICS & GENOMICS",
      DATE_PERFORMED: "04/11/2022",
      WHERE_PERFORMED:
        "RENOVATION, PARTINTIONING AND FURNISHING OFFICE - LAGOS",
      TOTAL_VALUE_OF_CONTRACT: 26440000.0,
      NAME_POSITION_OF_CLIENT_REP: "MR DOTIMI BEKE EXECUTIVE DIRECTOR",
    },
    {
      LIST_OF_CLIENT: "SPIE NIGERIA LIMITED",
      DATE_PERFORMED: "16/06/2023",
      WHERE_PERFORMED: "RENOVATION OF PROJECT OFFICE & CAMP BUILDINGS, PHC",
      TOTAL_VALUE_OF_CONTRACT: 160000000,
      NAME_POSITION_OF_CLIENT_REP: "MARC TORTE, BASE MANAGER",
    },
  ];
  return (
    <div
      className="bg-black py-12 px-4 sm:px-6 lg:px-8"
      style={{
        paddingTop: "6rem",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 bg-blue-500 text-white font-bold">
                {item.LIST_OF_CLIENT}
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.WHERE_PERFORMED}
                </div>
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Date Performed:</span>{" "}
                  {item.DATE_PERFORMED}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Total Value:</span>{" "}
                  {item.TOTAL_VALUE_OF_CONTRACT.toLocaleString("en-US", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Client Rep:</span>{" "}
                  {item.NAME_POSITION_OF_CLIENT_REP}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileDisplay;
