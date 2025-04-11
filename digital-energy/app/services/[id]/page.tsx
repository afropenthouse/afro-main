import type { Metadata, ResolvingMetadata } from "next";

import { capitalizeWords } from "@/lib/utils";
import { servicesData } from "@/lib/data";
import PageHeaderWithImage from "@/components/(landing)/common/page-header/PageHeaderWithImage";
import ServicesSingleDetails from "@/components/(landing)/ui-services/ServicesSingleDetails";
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner";

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const getService = (id: string) => {
    const service = servicesData.find(service => service.id === id);
    return service?.details_info;
}

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    let metaData;
    const id = (await params).id;
    const service = getService(id);

    if (service) {
        metaData = {
            title: `Services | ${capitalizeWords(service.page_header.title)}`,
            description: service.page_header.description
        };
    } else {
        metaData = {
            title: "Services | Service Details",
            description: "Details of Digital Energy service"
        };
    }

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    // console.log({ metaData })
    return {
        ...metaData,
        openGraph: {
            images: [...previousImages],
        },
    }
}

export default async function Page({ params, }: Props) {
    const id = (await params).id;
    const service = getService(id);

    return (
        <>
            {service ? (
                <>
                    <PageHeaderWithImage
                        title={service.page_header.title}
                        description={service.page_header.description}
                        image={service.page_header.image}
                    />

                    <ServicesSingleDetails
                        id={id}
                        {...service}
                    />
                </>
            ) : "Loading..."}

            <RequestQuoteBanner />
        </>
    )
}
