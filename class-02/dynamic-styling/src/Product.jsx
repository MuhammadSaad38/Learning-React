import "./Product.css";
export default function Product({title,price}){
    let isDiscount = price == 5000;
    let styles = {backgroundColor :  isDiscount ? "orange" : "pink"};
    return(
        <div className="Product" style={styles}>
            <h2>{title}</h2>
            <h3>Price: {price}</h3>
            {isDiscount ? <p>Discount of 5%</p> : <a href="#">Get Discounted</a>}
        </div>
    )
}