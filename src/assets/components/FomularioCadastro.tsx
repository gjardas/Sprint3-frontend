import './Formularios.css'
import { Link } from 'react-router-dom'
export default function FormularioCadastro(){
    return(
    <>
        <form id="form" className="form">
            <div className="form-content">
                <input type="text" id="login" placeholder="Digite seu nome"/>
                <input type="text" id="senha" placeholder="Digite seu CPF"/>
                <input type="text" id="login" placeholder="Digite sua senha"/>
                <input type="text" id="senha" placeholder="Confirme sua senha"/>
                <input type="text" id="login" placeholder="Digite sue endereço"/>
                <input type="text" id="senha" placeholder="Digite seu telefone"/>
                <Link to='/CadastroVeiculo'><button>Continuar</button></Link>
            </div>

        </form>
    </>
    )
}