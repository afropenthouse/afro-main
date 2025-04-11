import Container from "./Container"
import { MainPageHeading } from "./ContainerSectionHeadings"

interface PageHeaderProps {
    title: string;
    // subtitle?: string;
    // description?: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="flex flex-col gap-y-20">
                    <MainPageHeading
                        title={title}
                    />
                </div>
            </Container>
        </section>
    )
}

export default PageHeader