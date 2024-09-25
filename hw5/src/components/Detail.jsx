import { useParams } from "react-router-dom"

export const Detail = ({products}) => {
    const {productID} = useParams();
    const product = products.find(product => product.id === parseInt(productID,10));
    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src= {product.img}/>
        </div>
    )
}