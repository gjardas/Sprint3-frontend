import './Formularios.css'
import { Link } from 'react-router-dom'
export default function FormularioLogin(){
    return(
    <>
        <form id="form" className="form">
            <div className="form-content">
                <input type="text" id="login" placeholder="Digite seu CPF"/>
                <input type="password" id="senha" placeholder="Digite sua senha"/>
                <Link to='/Home'><button>Entrar</button></Link>
            </div>

        </form>
    </>
    )
}