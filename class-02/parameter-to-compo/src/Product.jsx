export default function Product(props){
    return(
        <>
        <h3>{props.title}</h3>
        <h5>{props.price}</h5>
        <h3>{props.features}</h3>
        </>
    )
}