import { boardOfDirectorsData } from "@/lib/data";
import Container from "../common/Container"
import TeamSingle from "./TeamSingle";

const Board = () => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                    {boardOfDirectorsData?.map((value, index) => (
                        <TeamSingle
                            key={index}
                            {...value}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Board