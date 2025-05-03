import { About } from "../about/About"
import { Contact } from "../contact/Contact";
import { Furniture } from "../furniture/Furniture";
import { Hero } from "../hero/Hero"
import { Trusted } from "../trusted/Trusted";
import "./styles/Main.styled.scss";

export const Main = () => {
    return (
        <main className="main">
            <Hero />
            <Trusted />
            <About />
            <Furniture />
            <Contact />
        </main>
    )
}