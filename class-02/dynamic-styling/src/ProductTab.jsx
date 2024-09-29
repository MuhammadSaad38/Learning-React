import Product from "./Product";

export default function ProductTab(){
    return (
        <>
            <Product title="laptop" price={5000}/>
            <Product title="pen" price={3000}/>
            <Product title="phone" price={7000}/>
        </>
    )
}