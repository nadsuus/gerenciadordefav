function Rodape({social1,social2,social3,descRodape}){
    return(
        <div>
            <img src={social1} alt={descRodape}></img>
            <img src={social2} alt={descRodape}></img>
            <img src={social3} alt={descRodape}></img>
        </div>
    )
}
function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}
export default Rodape