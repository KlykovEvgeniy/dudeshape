import { FC } from "react";
import { ButtonProps } from "./model/ButtonProps";
import './styles/Button.styled.scss'

export const Button: FC<ButtonProps> = ({ text, color, colorBg }) => {
    return <button className="btn" style={{ backgroundColor: colorBg, color }}>{text}</button>
}