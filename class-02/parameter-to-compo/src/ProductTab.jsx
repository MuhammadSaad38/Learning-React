 import Product from "./Product";

export default function ProductTab(){
    // let option = ["high-tech","expensive","Zeal-Zest"]
    return(
        <>
        {/* <Product title="phone" price={2000} feature = {option}/>
        <Product title="laptop" price={5000} feature = {option}/>
        <Product title="pen" price={7000} feature = {option} /> */}
        <Product title="phone" price={2000} />
        <Product title="laptop" price={5000}/>
        <Product title="pen" price={7000} />
        </>
    )
}