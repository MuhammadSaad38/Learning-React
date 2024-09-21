 import Product from "./Product";

export default function ProductTab(){
    return(
        <>
        <Product title="phone" price={2000} feature1 = {["high-tech","expensive","Zeal-Zest"]} feature2 = {{a:"high-tech", b :"expensive", c:"Zeal-Zest"}} />
        <Product title="laptop" price={5000} feature1 = {["high-tech","expensive","Zeal-Zest"]} feature2 = {{a:"high-tech", b :"expensive", c:"Zeal-Zest"}}/>
        <Product title="pen" price={7000} feature1 = {["high-tech","expensive","Zeal-Zest"]} feature2 = {{a:"high-tech", b :"expensive", c:"Zeal-Zest"}}/>
        </>
    )
}