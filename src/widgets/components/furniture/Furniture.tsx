import { Container } from "../container/Container";
import { useGetProductsQuery } from "./model/productApi";
import { Slider } from "../slider/Slider";
import SliderBtn from "./assets/slider-btn.svg";
import { useEffect, useState } from "react";
import "./styles/Furniture.styled.scss";


export const Furniture = () => {
    const { data, isLoading, isError } = useGetProductsQuery('');
    const [len, setLen] = useState<number>(0);
    const [val, setVal] = useState<number>(0);

    useEffect(() => {
        if (data && data.length > 0) {
            setLen(data.length)
        }
    }, [data]);

    const handleRightClick = () => {
        if (len - 3 === val) {
            return;
        }
        setVal(prev => prev + 1)
    }

    const handleLeftClick = (event: React.MouseEvent<HTMLElement>) => {
        if (val === 0) {
            return;
        }
        setVal(prev => prev - 1);
    }

    return (
        <section id="furniture" className="furniture">
            <Container>
                <div className="furniture-wrapper">
                    <div className="furniture__header">
                        <div className="furniture__header_text">
                            <h2 className="furniture__title">Our Popular Furniture</h2>
                            <p className="furniture__description">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
                        </div>

                        <div className="furniture__slider_btn">
                            <button aria-label="move left" onClick={handleLeftClick} className="slider__btn slider__btn_right" type="button">
                                <SliderBtn />
                            </button>
                            <button aria-label="move right" onClick={handleRightClick} className="slider__btn slider__btn_left" type="button">
                                <SliderBtn />
                            </button>
                        </div>
                    </div>
                    {isLoading && <h2>Loading...</h2>}
                    {isError && <h2>Error, try to reload website or browser /:</h2>}
                    {data && <Slider data={data} val={val} />}
                </div>
            </Container>
        </section>
    )
}