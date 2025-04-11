import { Icons } from "@/components/(landing)/common/Icons";
import {
    FootLinksType,
    FooterNavLinksType,
    NavLinkType,
    SocialLinksType,
} from "../types/constant";

// ---- Navbar ----
export const navbarLinks: NavLinkType[] = [
    {
        id: "home",
        name: "Home",
        path: "/",
        subMenu: undefined
    },
    {
        id: "company",
        name: "Company",
        path: "",
        subMenu: [
            {
                id: "about",
                name: "About",
                path: "/company/about",
            },
            {
                id: "mission-vision-values",
                name: "Mission, Vision & Values",
                path: "/company/mission-vision-values",
            },
            {
                id: "board-of-directors",
                name: "Board of Directors",
                path: "/company/board",
            },
            {
                id: "management-team",
                name: "Management Team",
                path: "/company/management",
            },
        ]
    },
    {
        id: "services",
        name: "Services",
        path: "/services",
        subMenu: [
            {
                id: "engineering-solutions",
                name: "Engineering Solutions",
                path: "/services/engineering-solutions",
            },
            {
                id: "procurement-services",
                name: "Procurement Services",
                path: "/services/procurement-services",
            },
            {
                id: "fabrication-and-construction",
                name: "Fabrication & Construction",
                path: "/services/fabrication-and-construction",
            },
            {
                id: "production-solutions",
                name: "Production Solutions",
                path: "/services/production-solutions",
            },
            {
                id: "it-solutions",
                name: "I.T Solutions",
                path: "/services/it-solutions",
            },
        ]
    },
    {
        id: "portfolio",
        name: "Portfolio",
        path: "/portfolio",
        subMenu: undefined
    },
    {
        id: "contact",
        name: "Contact us",
        path: "/contact",
        subMenu: undefined
    },
];

// ---- Footer ----
export const footerNavLinks: FooterNavLinksType = [
    {
        id: "company",
        name: "Company",
        links: [
            {
                id: "about",
                name: "About us",
                path: "/company/about",
            },
            {
                id: "services",
                name: "Our services",
                path: "/services",
            },
            {
                id: "portfolio",
                name: "Our portfolio",
                path: "/portfolio",
            },
        ],
    },
    {
        id: "services",
        name: "Services",
        links: [
            {
                id: "engineering-solutions",
                name: "Engineering Solutions",
                path: "/services/engineering-solutions",
            },
            {
                id: "procurement-services",
                name: "Procurement Services",
                path: "/services/procurement-services",
            },
            {
                id: "fabrication-and-construction",
                name: "Fabrication & Construction",
                path: "/services/fabrication-and-construction",
            },
            {
                id: "production-solutions",
                name: "Production Solutions",
                path: "/services/production-solutions",
            },
            {
                id: "it-solutions",
                name: "I.T Solutions",
                path: "/services/it-solutions",
            },
        ],
    },
];

export const footLinks: FootLinksType = [
    {
        id: "privacy",
        name: "Privacy",
        path: "",
    },
    {
        id: "terms-of-service",
        name: "Terms of service",
        path: "",
    },
];

export const socialLinks: SocialLinksType = [
    {
        id: "facebook",
        icon: Icons.facebook,
        url: "",
    },
    {
        id: "instagram",
        icon: Icons.instagram,
        url: "",
    },
    {
        id: "linkedin",
        icon: Icons.linkedinAlt,
        url: "",
    },
    {
        id: "twitter",
        icon: Icons.twitterX,
        url: "",
    },
];
