import { FC } from "react";
import { SliderProps } from "./model/SliderProps";
import { ProductCard } from "../../../entities";
import productImg from "./assets/product.png";
import "./styles/Slider.styled.scss"

export const Slider: FC<SliderProps> = ({ data, val }) => {

    return (
        <>
            {data &&
                <div className="slider">
                    <ProductCard key={data[val].id} img={productImg} title={data[val].name} cost={data[val].cost} />
                    <ProductCard key={data[val + 1].id} img={productImg} title={data[val + 1].name} cost={data[val + 1].cost} />
                    <ProductCard key={data[val + 2].id} img={productImg} title={data[val + 2].name} cost={data[val + 2].cost} />
                </div>
            }
        </>
    )
}