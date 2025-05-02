import { About } from "../about/About"
import { Hero } from "../hero/Hero"
import { Trusted } from "../trusted/Trusted";
import "./styles/Main.styled.scss";

export const Main = () => {
    return (
        <main className="main">
            <Hero />
            <Trusted />
            <About />
        </main>
    )
}