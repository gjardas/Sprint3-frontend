import { Link } from 'react-router-dom'
import './BotaoVoltar.css'
import './Formularios.css'

export default function BotaoVoltar(){
    return(
        <>
        <Link to='./Home'><button className='voltar'>Voltar</button></Link>
        </>
    )
}