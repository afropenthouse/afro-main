import Container from "../common/Container"
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <footer>
            <div className="bg-de_tertiary_09">
                <Container>
                    <FooterTop />
                </Container>
            </div>

            <div className="bg-white">
                <Container>
                    <FooterBottom />
                </Container>
            </div>
        </footer>
    )
}

export default Footer