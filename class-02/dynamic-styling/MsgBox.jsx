export default function MsgBox({userName, textColor , bg}){
    return (
        <>
            <h2 style={{color : textColor , backgroundColor : bg}} >Hello {userName}</h2>
        </>
    )
}