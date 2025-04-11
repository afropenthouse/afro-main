"use client"

import { servicesData } from "@/lib/data"
import Container from "../common/Container"
import ServicesSingle from "./ServicesSingle"

const Services = () => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                {/* <div className="flex flex-wrap justify-center gap-6 xl:gap-8"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {servicesData?.map((value) => (
                        <ServicesSingle
                            key={value.id}
                            {...value}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Services