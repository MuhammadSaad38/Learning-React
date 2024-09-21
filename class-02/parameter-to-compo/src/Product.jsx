export default function Product(props){
    return(
        <>
        <h3>{props.title}</h3>
        <h5>{props.price}</h5>
        <p>{props.feature1}</p>
        <p>{props.feature2.a}</p>
        <p>{props.feature2.b}</p>
        <p>{props.feature2.c}</p>

        </>
    )
}