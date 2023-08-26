import {} from 'react'
import Img from './assets/spfc.png'
import './Conteudo.css'


function Conteudo(){
    
    const aluno = "Kayque"
    const curso = "Engenharia de Software"

    return(
        <>
            <img src={Img} title='spfc'/>
            <p>{aluno}</p>
            <p>{curso}</p>
        </>
    )
}

export default Conteudo