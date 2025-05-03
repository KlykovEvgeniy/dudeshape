import { FC } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { NavProps } from "./model/NavProps";
import { RightNav } from "../right-nav/rightNav";
import "./styles/Nav.styled.scss";

export const Nav: FC<NavProps> = ({fn}) => {
    const { width } = useWindowSize();
    return (
        <nav className="nav">
            <ul>
                <li><a onClick={() => fn()} href="#">Home</a></li>
                <li><a onClick={() => fn()} href="#about">About</a></li>
                <li><a onClick={() => fn()} href="#furniture">Features</a></li>
                <li><a onClick={() => fn()} href="#">Contact</a></li>
                <li>{
                    width <= 768 &&
                    <RightNav />
                }</li>
            </ul>
        </nav>
    )
}