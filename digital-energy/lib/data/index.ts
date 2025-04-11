import { Icons } from "@/components/(landing)/common/Icons";
import {
    ContactDirectionProp,
    PortfolioProp,
    ServicesProp,
    SubsidiarySlideProp,
    TeamSlideProp,
    TeamsProp
} from "../types/constant";
import { Images } from "@/public/images";

export const boardOfDirectorsData: TeamsProp[] = [
    {
        image: Images.BoardSimon,
        title: "Simon Chukwunweluwa Ugwuoke",
        role: "MD & CEO",
        experience: "Simon is a serial entrepreneur and a leader per excellence with experience spanning decades. He is a graduate of the University of Nigeria Nsukka and has obtained several other certifications and trainings both locally and internationally. Simon directs the day to day affairs of the Digital Energy business."
    },
    {
        image: Images.BoardOlutayo,
        title: "Engr. Olutayo Ajayi",
        role: "ED, Technical Services",
        experience: "He is a seasoned mechanical engineer with a B.Sc. degree in Mechanical Engineering and over 28 years of global experience in managing complex projects in the power, oil, and gas sectors. A COREN registered Engineer and member of Nigerian Society of Engineers (MNSE), he boasts a proven track record of delivering multi-million-dollar projects."
    },
    {
        image: Images.BoardFredrick,
        title: "Mr. Fredrick Okeagu",
        role: "ED, HR & Management Services",
        experience: "Global Speaker, a Certified Management Consultant and HR professional with over 15 years experience. He is a doctoral student (Ph.D) in IRHRM, an MSc graduate in IHRM, and holds a PGD in Guidance & Counselling. He is Certified with CIPM, Nigeria, KPI Institute- Australia and a member of the Africa HR Confederation (AHRC)."
    },
    {
        image: Images.BoardGabriel,
        title: "Gabriel Igbokwe",
        role: "Sales Director",
        experience: "A seasoned downstream industry professional with over 22 years of experience. Former Founder and Managing Director of Kaniex Oil & Gas Ltd and Strange Seasons Energy Ltd. A results-driven business development expert with a proven track record in managing people and resources effectively to drive growth and success."
    },
];

export const managementTeamData: TeamsProp[] = [
    {
        image: Images.TeamAmarachi,
        title: "Ibeako Amarachi",
        role: "Group Head Information Tech",
        experience: "A highly ambitious and self-driven IT professional with 15+ years experience in security management systems, business continuity, and network planning. A Certified Information Security Manager (CISM) with extensive experience in overseeing and safeguarding an organization's computer security infrastructure."
    },
    {
        image: Images.TeamVictor,
        title: "Victor Amadi-Emina",
        role: "Head, Trading & Shipping Operations",
        experience: "He is a trader and shipping operations professional in the downstream oil and gas. An expert with over 20 years in the industry having worked in many downstream oil and gas companies in Nigeria, trading different grades of refined petroleum products and crude oils. He has also worked in Europe where he handled physical and paper trading of various crude grades to major refineries in the USA, China, India and Japan."
    },
    {
        image: Images.TeamChidinma,
        title: "Chidinma Obi",
        role: "Head of Accounts",
        experience: "Chidinma is a highly detailed and ethical Accountant with over 13 years of experience in internal audit, finance, bookkeeping, and analytics. She holds a degree in Accounting from Ahmadu Bello University, Zaria, and is a member of The Institute of Chartered Accountants of Nigeria (ICAN) and the Nigerian Institute of Management (NIM). She also has extensive experience in the Real Estate, Shipping, and Logistics sectors."
    },
    {
        image: Images.TeamKiki,
        title: "Kiki N.C. Ejiaku",
        role: "Business Development Manager",
        experience: "She is a Seasoned Business Development Manager with 22 years of dedicated experience, committed to driving strategic growth and fostering long-term partnerships. Thrives on turning ideas into opportunities. She is a graduate of the University of Calabar and has obtained several other certifications and training in the same field."
    },
    {
        image: Images.TeamAnthony,
        title: "Anthony Chukwuemeka Uche",
        role: "Head, Depot Operations",
        experience: "Proven with 19 years experience in the Pharmaceutical and Oil & Gas industries. He specialized in fields of Sales & Marketing, Business Development, and Operations. He holds BSc (Hons) in Marine Biology from University of Lagos and MBA in (Business Administration) from Enugu State University of Technology, Enugu (ESUT)."
    },
    {
        image: Images.TeamEzechi,
        title: "Ezechi Ajibo",
        role: "Company Secretary",
        experience: "Seasoned lawyer with 15+ years of experience in international joint ventures, contract negotiations, debt recoveries, and real estate law. Proven track record of advising multinational companies, including Sanofi Aventis, Doehler Group, and Merck. Recently appointed as Legal Adviser and Company Secretary to Digital Energy Group of companies (2023)."
    },
];

export const teamSlidesData: TeamSlideProp[] = [
    {
        image: Images.TeamSlide1,
        title: "team1",
    },
    {
        image: Images.TeamSlide2,
        title: "team2",
    },
    {
        image: Images.TeamSlide3,
        title: "team3",
    },
    {
        image: Images.TeamSlide4,
        title: "team4",
    },
];

export const subsidiarySlidesData: SubsidiarySlideProp[] = [
    {
        image: Images.Vibeazy,
        product_name: "Vibeazy®",
        product_info: "Vibeazy is an online application that helps you stick to your budget by suggesting affordable places to go on dates, family & group hangouts, offering exclusive discounts when you pay via the app.",
        category: "Social Finance",
        link: "https://www.vibeazy.com",
    },
    {
        image: Images.Cashwyre,
        product_name: "Cashwyre®",
        product_info: "Cashwyre is a FinTech platform designed to streamline cross-border payments. It offers services such as remittances, fund transfers, Crypto4Cash, virtual dollar cards, and more. Additionally, FinTechs and businesses can integrate Cashwyre's APIs to enhance their financial solutions.",
        category: "FinTech Services",
        link: "https://cashwyre.io",
    },
    {
        image: Images.PurpleHCM,
        product_name: "PurpleHCM®",
        product_info: "PurpleHCM is an innovative HR technology solution designed to streamline and optimize human capital management for businesses of all sizes. Developed by RecodeApps, PurpleHCM offers a comprehensive suite of tools for talent acquisition, payroll processing, performance management, employee engagement, and workforce analytics.",
        category: "HR Technology Solution",
        link: "",
    },
    {
        image: Images.MendAfrica,
        product_name: "MendAfrica®",
        product_info: "MendAfrica is an online platform that partners with credible, vetted individuals and organizations to highlight projects that positively impact Africa. Discover, give and get updates on these projects.",
        category: "Social Enterprise",
        link: "https://www.mendafrica.org",
    },
];

export const creativeHeadsData: TeamsProp[] = [
    {
        image: Images.TeamSunday,
        title: "Sunday Okoro Awa",
        role: "CEO, Wyrelight Tech",
        experience: "A FinTech entrepreneur and Solutions Architect with nearly 17+ years of experience, Sunday is the founder of Cashwyre, a growing FinTech company. He is dedicated to simplifying payments with focus on Africa, through innovative solutions built on Bitcoin and crypto-based rails, aiming to improve the region's payment infrastructure. Passionate about addressing the region's dilapidated payment need, Sunday has made it one of his life's mission to tackle this challenge head-on."
    },
    {
        image: Images.TeamVictorI,
        title: "Victor Ighalo",
        role: "CEO, Recode Apps",
        experience: "Victor Ighalo is an experienced software engineer with over eight years in building scalable tech solutions, particularly in FinTech. As the founder of RecodeApps, he is focused on creating innovative software. RecodeApps is preparing to launch its flagship HR software, PurpleHCM, aimed at transforming human capital management. Victor is passionate about technology and problem-solving, dedicated to delivering high-quality software that drives business success."
    },
    {
        image: Images.TeamDavid,
        title: "David Igbokwe",
        role: "Group Creative Manager",
        experience: "A seasoned product and marketing strategist with over a decade of experience in technology, startups, and product development. A graduate of California State University, Monterey Bay, with a degree in Global Business and Marketing, David has spent the last 10 years building and scaling innovative products. As a Creative Manager, he brings a strong background in business development, branding, and technology to drive impactful solutions."
    },
];

export const servicesData: ServicesProp[] = [
    {
        id: "engineering-solutions",
        icon: Icons.engineeringIcon,
        title: "Engineering Solutions",
        description: "DEISL in association with our foreign technical partners offer comprehensive engineering services as well as advanced activities.",
        link: "/services/engineering-solutions",
        details_info: {
            page_header: {
                title: "Engineering Solutions",
                description: "DEISL in association with our foreign technical partners offer comprehensive engineering services as well as advanced activities.",
                image: Images.EngineeringBannerImg
            },
            about: {
                pg1: "We offer conceptual & Feasible engineering such as design simulation, process simulation, failure and trouble shooting. DEISL Engineering is skilled and experience at leading and executing highly sophisticated and multidisciplinary projects.",
                pg2: "Our proven methods of coordination and collaboration with strict management of quality, value, schedule, and cost has distinguished us from the rest in the industry. Our core team of dynamic engineers ensures engineering design outputs are strictly in line with client's requirements and our processes are design to guarantee client satisfaction."
            },
            services: {
                title: "Our key engineering services",
                values: [
                    "Front-End Engineering Design (FEED)",
                    "Integrated field development planning - feasibility, concept, pre-FEED",
                    "Basic & Detailed Engineering Design",
                    "Piping engineering (stress analysis and materials)",
                    "Risk, safety, and environmental engineering - HAZOP, HAZIND",
                    "Engineering consultancy services - Owners Engineer",
                    "Complex offshore structural analysis and fatigue/life extension assessment",
                    "Construction and Fabrication Engineering",
                    "Metallurgy and materials engineering design etc.",
                ]
            }
        }
    },
    {
        id: "procurement-services",
        icon: Icons.procurementIcon,
        title: "Procurement Services",
        description: "DEISL supplies materials and equipment to the oil and gas industry adopting a highly efficient approach to the supply of materials and equipment.",
        link: "/services/procurement-services",
        details_info: {
            page_header: {
                title: "Procurement Services",
                description: "DEISL supplies materials and equipment to the oil and gas industry adopting a highly efficient approach to the supply of materials and equipment.",
                image: Images.ProcurementBannerImg
            },
            about: {
                pg1: "We handle the challenge of global outsourcing and provides effective Global Procurement solutions under a single point of contact and responsibility.",
                pg2: "Today's global supply market presents an increasingly cost challenge to end-users for the procuring, expediting, inspecting, and transporting of materials and goods originating from the four corners of the world. DEISL can facilitate this process through its international network in the management of the end-user's supply chain and our management team ensures the productions of engineering and quality control issues.",
                pg3: "In the provision of local content DEISL strives on the manpower, skills and training and human capital development.Every project is managed for timely and efficient cost-effective caption incorporating.",
            },
            services: {
                title: "Our key procurement services",
                values: [
                    "Foreign And Local Procurement",
                    "Consolidation and Warehousing in Europe and America",
                    "Technical and Engineering Specification",
                    "Supply Chain Management",
                    "Procurement, Ordering and Expediting Services",
                    "In-country professionals, familiar with language, market, and customs",
                    "Central control and reporting of materials movement",
                    "Inspection Services",
                    "Logistics Services etc.",
                ]
            }
        }
    },
    {
        id: "fabrication-and-construction",
        icon: Icons.fabricationIcon,
        title: "Fabrication & Construction",
        description: "DEISL construction management services provide assurance to the client of a well-run, problem free construction job site.",
        link: "/services/fabrication-and-construction",
        details_info: {
            page_header: {
                title: "Fabrication and Construction Solutions",
                description: "DEISL construction management services provide assurance to the client of a well-run, problem free construction job site.",
                image: Images.FabricationBannerImg
            },
            about: {
                pg1: "The team of experienced construction professionals provides cost control, scheduling coordination, quality control and timely execution of plans throughout the life of our construction project.",
                pg2: "Our knowledge of local industrial standards and international applicable codes, life safety requirements, permits and other local rules and regulations in the construction process is critical to the project's on-time and on-budget completion according to plan. The client's interest is represented throughout the project, from start to finish, ensuring schedule compliance, coordinating proper document control and optimizing the owner's investment in the project. Testing and termination of all instrument cables in SIS & PCS panels as well as Hook up (cabling, glanding, testing, and termination) of non-intrusive pig detector support fabrication and JB installation are key services of both  construction and fabrication."
            },
            services: {
                title: "Our key fabrication services",
                values: [
                    "Shop Fabrication - Piping and Structures",
                    "Machining and Turning Services",
                    "Construction, Installation, Completion, and Commissioning",
                    "Construction Project Management",
                    "Corrosion Control (Blasting & Painting) and Cathodic Protection",
                    "Hydrotesting",
                    "Hook up (cabling, glanding, testing, and termination) of instruments",
                    "Electrical and instrument tray/Unistrut fabrication and installation",
                    "Bolt Torquing, Tensioning and Hot Bolting etc.",
                ]
            }
        }
    },
    {
        id: "maintenance-solutions",
        icon: Icons.maintenanceIcon,
        title: "Maintenance Solutions",
        description: "With extensive experience in the maintenance industry, we provide tailored, high-quality, and cost-effective solutions that address the specific needs of our clients.",
        link: "/services/maintenance-solutions",
        details_info: {
            page_header: {
                title: "Maintenance Solution",
                description: "With extensive experience in the maintenance industry, we provide tailored, high-quality, and cost-effective solutions that address the specific needs of our clients.",
                image: Images.MaintenanceBannerImg
            },
            about: {
                pg1: "Our services are tailored to meet the specific needs of our clients, addressing the unique challenges and complexities inherent in the energy and oil industry. From upstream production to midstream transportation and downstream refining, we understand the critical operational demands and the importance of minimizing downtime while maximizing efficiency and safety.",
                pg2: "Our team works collaboratively with clients to develop and implement proactive maintenance strategies that improve asset reliability, extend equipment life-cycles, and optimize overall performance.By leveraging advanced technologies, data analytics, and industry best practices, we ensure that every solution is not only effective but also aligned with long - term sustainability goals.Whether it's preventive maintenance, reliability optimization, or emergency support, we are committed to delivering tailored solutions that drive value, enhance operational resilience, and ensure the highest standards of service and safety across all stages of the energy production lifecycle.",
            },
            services: {
                title: "Our key maintenance services",
                values: [
                    "Asset Management Services - Inventory and Spare Parts Management",
                    "Plant Shutdown Packaging - Planning & Resource",
                    "Preventative maintenance following OEM requirements and good practice",
                    "Predictive analysis of when to perform maintenance",
                    "Valve And PSV/PVSV Servicing, Re-Facing, Certification and Recalibration",
                    "Insulation And Corrosion Under Insulation Repair Services",
                    "Scaffold Erection and Dismantling Services",
                    "Structure And Piping Fabrication and Offshore Installation/Hook-Up Services",
                    "Tank Gauging System Maintenance etc.",
                ]
            }
        }
    },
    {
        id: "commissioning-solutions",
        icon: Icons.commissioningIcon,
        title: "Commissioning Solutions",
        description: "DEISL commissioning goal is to ensure the safe and orderly handover of a unit after construction to the owner as an effectively running plant.",
        link: "/services/commissioning-solutions",
        details_info: {
            page_header: {
                title: "Commissioning Solution",
                description: "DEISL commissioning goal is to ensure the safe and orderly handover of a unit after construction to the owner as an effectively running plant.",
                image: Images.CommissioningBannerImg
            },
            about: {
                pg1: "We provide comprehensive pre-commissioning and commissioning services for offshore, subsea, and onshore facilities, pipelines, umbilicals, risers, and flow lines (SURF).",
                pg2: "Our expert team ensures that your systems are properly prepared for commissioning and start- up, minimizing downtime and ensuring a smooth transition to operations, as well as maintaining any CMS(Completions Management System) database, update progress, run reports and facilitate the completions management to ensure readiness to start- up is achieved.",
                pg3: "We collate all engineering and vendor documentation required to support the pre- commissioning and commissioning activities, Identify risks generated associated with the execution of commissioning, start - up and operation activities and development of the corresponding safety rules, requirements, and communication tools."
            },
            services: {
                title: "Our key commissioning services",
                values: [
                    "Mechanical Completion Audits",
                    "Review and execution of relevant E&I Commissioning Test Procedures (CTP) ",
                    "Solve all issues with gaskets, welds, & valves",
                    "Flooding and dewatering",
                    "Confirm complete installation of all required parts",
                    "Electrical & Instrumentation Calibration & Check-out",
                    "Pipeline Cleaning and Commissioning",
                    "Check safety & software interlock sequences using",
                    "System Purging & Start-Up etc.",
                ]
            }
        }
    },
    {
        id: "project-management",
        icon: Icons.projManagementIcon,
        title: "Project Management",
        description: "DEISL offers a comprehensive project evaluation, procurement and implementing improvement in reporting and project management services.",
        link: "/services/project-management",
        details_info: {
            page_header: {
                title: "Project Solution",
                description: "DEISL offers a comprehensive project evaluation, procurement and implementing improvement in reporting and project management services.",
                image: Images.ProjectBannerImg
            },
            about: {
                pg1: "DEISL provides services to every stage of a project's development while maintaining an in-depth capability to undertake consultancy and conceptual studies, all levels of engineering and design, procurement and project management, and these levels are sustained through our project management activities in terms of skilled, experienced personnel and the project control systems.",
                pg2: "Our project management services include developing a project plan, which involves defining and confirming the project goals and objectives, how they will be achieved, identifying tasks, and quantifying the resources needed, and determining budgets and timelines for completion.",
                pg3: "It also includes managing the implementation of the project plan, along with operating regular 'controls' to ensure that there is accurate and objective information on 'performance' relative to the plan, and the mechanisms to implement recovery actions where necessary."
            },
            services: {
                title: "Our project management services",
                values: [
                    "Feasibility Studies - Achieving Project Objectives and Optimisation",
                    "Planning - Project's Outcomes, Schedule Goals and Objectives ",
                    "Governance - Business Level Control to Projects",
                    "Success Criteria - Setting Criteria and Eliminating Doubt on Project Success",
                    "Resource Allocation - People, Money, and Scheduling",
                    "Risk Assessment - What Could Go Wrong and How to Manage it",
                    "Ethics and Projects-Conformance with Moral and Legal Requirements",
                    "Communication - Communicating Project Plans and Status",
                    "Evaluating Project Results and Implementing Improvement in Reporting",
                ]
            }
        }
    },
    {
        id: "operations-solutions",
        icon: Icons.operationsIcon,
        title: "Operations Solutions",
        description: "DEISL Operational Solutions offers comprehensive support to ensure smooth and efficient operations across all stages of your energy and oil projects.",
        link: "/services/operations-solutions",
        details_info: {
            page_header: {
                title: "Operations Solution",
                description: "DEISL Operational Solutions offers comprehensive support to ensure smooth and efficient operations across all stages of your energy and oil projects.",
                image: Images.OperationsBannerImg
            },
            about: {
                pg1: "Our team of seasoned professionals brings expertise in operational optimization, resource management, cost reduction, and system integration. With a strong focus on safety, compliance, and sustainability, we help streamline processes, enhance performance, and minimize risks. From planning to execution, our solutions provide the reliability and effectiveness you need for timely and successful project delivery in the dynamic energy sector.",
                pg2: "By leveraging advanced monitoring systems and industry best practices, we ensure maximum uptime by proactively identifying and addressing potential disruptions before they impact operations.Our team works hand-in -hand with yours to implement streamlined processes, enhance asset reliability, and maintain high operational performance, minimizing downtime and ensuring continuous, safe, and efficient production.Whether it's optimizing workflow, managing resources, or improving equipment reliability, we focus on driving operational excellence to achieve consistent and reliable output, even in the most challenging environments.",
            },
            services: {
                title: "Our key operations services",
                values: [
                    "Operations management",
                    "Operations and reliability optimization",
                    "Inspection and functional testing",
                    "Start-up and handover of production",
                    "Operational technical support",
                    "Training of operators, supervisors and technicians",
                    "Operations man-power supply",
                    "Well Testing and Analysis",
                    "Risk and HSE (Health, Safety, Environment) Management etc.",
                ]
            }
        }
    },
    {
        id: "it-solutions",
        icon: Icons.itSolutionsIcon,
        title: "I.T Solutions",
        description: "Our IT solutions are designed to ensure that your organization not only keeps pace with technological advances but also leads the charge in efficiency and innovation.",
        link: "/services/it-solutions",
        details_info: {
            page_header: {
                title: "I.T Solutions",
                description: "Our IT solutions are designed to ensure that your organization not only keeps pace with technological advances but also leads the charge in efficiency and innovation.",
                image: Images.ItBannerImg
            },
            about: {
                pg1: "We specialize in transforming ideas into innovative enterprise-level applications. Our focus is on delivering cutting- edge software solutions that propel business growth and enhance operational efficiency for our clients. With a commitment to excellence and a passion for technology, we harness the latest advancements to build robust, scalable, and user- friendly applications tailored to meet the unique needs of each business.",
                pg2: "Our team of experienced developers, designers, and project managers work collaboratively to ensure that every project we undertake not only meets but also exceeds our clients' expectations. We understand the challenges businesses face in today's fast- paced digital landscape, and we strive to provide solutions that are not only effective but also future - proof.Whether you are looking to streamline your operations, enhance your customer engagement, or innovate your business model, IT Solutions are here to help you achieve your goals.",
            },
            services: {
                title: "Our key I.T services",
                values: [
                    "Supply Chain and Vendor Management",
                    "Human Resources (HR) and Personnel Management",
                    "Operations and Maintenance",
                    "IT Infrastructure and Support",
                    "Payment Solutions",
                    "Environmental and Safety Compliance",
                    "Security and Compliance",
                    "Engineering and Technical Operations",
                    "Finance and Accounting",
                ]
            }
        }
    },
];

export const portfolioData: PortfolioProp[] = [
    {
        image: Images.Ogboinbiri,
        title: "Ogboinbiri ATM Flare Remote Ignition System",
        description: "Nigerian AGIP Oil Company Ltd., in Bayelsa",
        link: ""
    },
    {
        image: Images.Amukpe,
        title: "Amukpe, Oben & Sapele Fare Tip Change out project",
        description: "SEPLAT Petroleum Development Company Ltd, in Delta",
        link: ""
    },
    {
        image: Images.Total,
        title: "Fabrication & Installation of OB 3 WORKOVER  Location",
        description: "TOTAL E&P Nigeria Ltd., in PH",
        link: ""
    },
    {
        image: Images.Neconde,
        title: "Commissioning of Odidi Central Processing facility",
        description: "Neconde, Odidi CPF",
        link: ""
    },
    {
        image: Images.Portfolio_Procurement,
        title: "Procurement Of Gas Pressure Regulator 25bar & Cardridge Gas",
        description: "MIDWESTERN",
        link: ""
    },
    {
        image: Images.Portfolio_Upgrade,
        title: "Upgrade and Maintenance of Duport Midstream 2500B/D",
        description: "Fuel  Direct Ltd Modular Refinery, Ebokpa, Edo  State",
        link: ""
    },
];

export const contactDirectionData: ContactDirectionProp[] = [
    {
        id: "head_office",
        title: "Head Office",
        address: "Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria.",
        phone_numbers: ["+2342014536157", "+2349039903519", "+2348101259849"],
        direction: ""
    },
    {
        id: "port_harcourt_terminal_office",
        title: "Port Harcourt Terminal Office",
        address: "Digital Energy Close, Off Igboeche road, by Eleme Junction,  Port Harcourt, Nigeria.",
        phone_numbers: [],
        direction: ""
    },
    {
        id: "port_harcourt_fab_office",
        title: "Port Harcourt Office/Fab. Yard",
        address: "Mini-Owo Farm Land, Rumuokwurusi, Obio/Akpo LGA, Rivers State.",
        phone_numbers: ["+2347034688358",],
        direction: ""
    },
    {
        id: "chevron_office",
        title: "Chevron Office",
        address: "House 8, Dr. Chimezie Street, Chevy View Estate, along Chevron drive, off Lekki- Epe expressway, Lagos.",
        phone_numbers: ["+2347086078838", "+2347077525861", "+234 810 125 9849"],
        direction: ""
    },
];