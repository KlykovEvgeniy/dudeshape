import { useWindowSize } from "@uidotdev/usehooks";
import { RightNav } from "../right-nav/rightNav";
import "./styles/Nav.styled.scss";

export const Nav = () => {
    const { width } = useWindowSize();
    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
                <li>{
                    width <= 768 &&
                    <RightNav />
                }</li>
            </ul>
        </nav>
    )
}