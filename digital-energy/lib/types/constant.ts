import { IconsType } from "@/components/(landing)/common/Icons";

export type DefaultMetadataType = {
    page: string;
    title: string;
    description: string;
};

export type ParamsPropsType = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
};

export type NavLinkType = {
    id: string;
    name: string;
    path: string;
    // icon?: IconsType; // | ComponentType<{ size?: number, className?: string }>
    subMenu?: NavLinkType[] | undefined;
}

export type SidebarLinksType = {
    navLinks: NavLinkType[];
}

export type FootLinksType = {
    id: string;
    name: string;
    path: string;
}[]

export type FooterNavLinksType = {
    id: string;
    name: string;
    links: FootLinksType;
}[]

export type SocialLinksType = {
    id: string;
    icon: IconsType;
    url: string;
}[]

export type TeamsProp = {
    image: string,
    title: string,
    role: string,
    experience: string,
}

export type TeamSlideProp = {
    image: string,
    title?: string,
}

export type SubsidiarySlideProp = {
    image: string,
    product_name: string,
    product_info: string,
    category: string,
    link: string,
}

export type ServiceDetailsProp = {
    page_header: {
        title: string,
        description: string,
        image: string
    },
    about: {
        pg1: string,
        pg2?: string,
        pg3?: string
    },
    services: {
        title: string,
        values: string[]
    }
}

export type ServicesProp = {
    id: string,
    icon: IconsType,
    title: string,
    description: string,
    link: string,
    details_info: ServiceDetailsProp
}

export type PortfolioProp = {
    image: string,
    title: string,
    description: string,
    link?: string,
}

export type ContactDirectionProp = {
    id: string,
    title: string,
    address: string,
    direction?: string,
    phone_numbers: string[],
}
