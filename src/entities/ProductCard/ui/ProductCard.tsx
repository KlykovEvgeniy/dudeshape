import { FC } from "react"
import { ProductCardProps } from "../model/ProductCardProps";
import Like from "../assets/like.svg";
import Share from "../assets/share.svg";
import "../styles/ProductCard.styled.scss";

export const ProductCard: FC<ProductCardProps> = ({ title, cost, img }) => {
    return (
        <div className="product-card">
            <img src={img} alt="product image" />
            <div className="product__main_description">
                <div className="product__main_main">
                    <h3 className="product__main_title">{title}</h3>
                    <div className="product__main_right">
                        <button aria-label="like product" className="product__btn_like product__btn" type="button">
                            <Like />
                        </button>
                        <button aria-label="share product" className="product__btn_share product__btn" type="button">
                            <Share />
                        </button>
                    </div>
                </div>
                <div className="product__main_with-buy">
                    <p className="product__cost">{cost}$</p>
                    <button className="product__btn_buy" type="button">Buy Now</button>
                </div>
            </div>
        </div>
    )
}