import Product from "./Product";

export default function ProductTab(){
    return(
        <>
        <Product title="phone" price={2000} />
        <Product title="laptop" price={5000}/>
        <Product title="pen" price={7000}/>
        </>
    )
}