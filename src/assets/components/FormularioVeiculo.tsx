import './Formularios.css'
import { Link } from 'react-router-dom'
export default function FormularioVeiculo(){
    return(
    <>
        <form id="form" className="form">
            <div className="form-content">
                <input type="text" id="login" placeholder="Qual o tipo do seu automovel"/>
                <input type="text" id="senha" placeholder="QUal o modelo do automovel?"/>
                <input type="text" id="login" placeholder="Qual o ano automovel?"/>
                <input type="text" id="senha" placeholder="Qual a placa do automovel"/>
                <input type="text" id="login" placeholder="Qual a cor do automovel?"/>
                <input type="text" id="senha" placeholder="Qual o chassi do automovel?"/>
                <Link to='/'><button>Entrar</button></Link>
            </div>

        </form>
    </>
    )
}