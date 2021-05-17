import ProductCard from "../ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = ({items, loading, error, addToCart}) => {

    if(loading){
        return <p>...Loading</p>
    }
    if(error){
        return <p>Product list not found</p>
    }
    const productElements = items.map(item => <ProductCard {...item} onAddToCart={()=>addToCart(item)} />)
    return (
        <div className={styles.list}>
            {productElements}
        </div>
    );
}
 
export default ProductList;