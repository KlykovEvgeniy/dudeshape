import { FC } from "react";
import { ContainerProps } from "./model/props";
import "./styles/Container.styled.scss";

export const Container: FC<ContainerProps> = ({ children }) => {
    return <div className="container">{children}</div>
};