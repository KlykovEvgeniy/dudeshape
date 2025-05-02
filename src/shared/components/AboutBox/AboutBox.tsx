import { FC } from "react"
import { AboutBoxProps } from "./model/AboutBoxProps"
import "./styles/AboutBox.styled.scss";

export const AboutBox: FC<AboutBoxProps> = ({title, text, Img}) => {
    return (
        <div className="about__box">
            <Img />
            <div className="box__main">
                <h3 className="box__title">{title}</h3>
                <p className="box__text">{text}</p>
            </div>
        </div>
    )
}