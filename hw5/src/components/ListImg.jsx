import { Link, useParams } from "react-router-dom"
import s from "./App.module.css";
export const ListImg = ({product}) => {
    return(
        <>
            {product.map((product) => 
            (<div key={product.id} className={s.goods}>
                <Link to = {`/image/${product.id}`}> {product.title} </Link>

            </div>)
            )}
        </>
    )
}