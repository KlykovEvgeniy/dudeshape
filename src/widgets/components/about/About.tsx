import { Container } from "../container/Container";
import { AboutBox } from "../../../shared";
import aboutbg from "./assets/bg/about.png";
import Shield from "./assets/icons/shield.svg";
import Secure from "./assets/icons/secure.svg";
import Delivery from "./assets/icons/delivery.svg";
import "./styles/About.styled.scss";

export const About = () => {
    return (
        <section id="about" className="about">
            <Container>
                <div className="about-wrapper">
                    <img className="about__img" loading="lazy" src={aboutbg} alt="beautiful sofa" aria-label="image" />
                    <div className="about__main">
                        <h2 className="about__title">About us</h2>
                        <p className="about__description">
                            All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials
                        </p>
                        <div className="about__adventage">
                            <AboutBox Img={Shield} title="Best Quality" text="All of our furniture uses the best materials and choices" />
                            <AboutBox Img={Secure} title="100% Secure" text="All of our furniture uses the best materials and choices" />
                            <AboutBox Img={Delivery} title="Free Shipping" text="All of our furniture uses the best materials and choices" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}