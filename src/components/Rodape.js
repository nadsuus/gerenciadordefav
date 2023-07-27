function Rodape({social1,social2,social3,descRodape}){
    return(
        <div>
            <img src={social1} alt={descRodape}></img>
            <img src={social2} alt={descRodape}></img>
            <img src={social3} alt={descRodape}></img>
        </div>
    )
}

export default Rodape