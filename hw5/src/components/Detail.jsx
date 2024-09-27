import { useParams } from "react-router-dom"
import s from "../App.module.css";
export const Detail = ({products, theme}) => {
    const {productID} = useParams();
    const product = products.find(product => product.id === parseInt(productID,10));
    return(
        <div className={theme? `${s.ligth}` : `${s.darck}`}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src= {product.img}/>
        </div>
    )
}