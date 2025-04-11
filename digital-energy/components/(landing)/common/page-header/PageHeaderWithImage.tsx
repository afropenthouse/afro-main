import Container from "../Container";
import Breadcrumb from "./Breadcrumb";

type PageHeaderWithImageType = {
    title: string;
    description: string;
    image: string;
}

const PageHeaderWithImage = ({
    title,
    description,
    image
}: PageHeaderWithImageType) => {
    return (
        <section className="text-de_tertiary_0c">
            <Container className="!max-w-full px-0 md:px-0">
                <div className="w-full flex flex-col-reverse md:flex-row md:items-center gap-y-0 gap-x-10">
                    <div className="w-full flex flex-col-reverse gap-y-5 py-12 md:py-5 px-7 md:px-8">
                        <div className="flex flex-col gap-y-4 w-full">
                            <h1 className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[3.5rem] tracking-[-1.25px]">{title}</h1>

                            <p>{description}</p>
                        </div>

                        <Breadcrumb withImage />
                    </div>

                    <div
                        className="relative w-full md:max-w-[595px] 2xl:max-w-[950px] h-auto min-h-[300px] md:min-h-[480px] bg-center bg-no-repeat bg-cover before:bg-de_tertiary_09/30 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[1]"
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                    >
                        <div className="z-[2] absolute top-0 left-0 w-20 flex flex-wrap">
                            <div className="h-10 w-10 bg-transparent"></div>
                            <div className="h-10 w-10 bg-white"></div>
                            <div className="h-10 w-10 bg-white"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PageHeaderWithImage;