import { Link } from 'react-router-dom'
export default function FormularioSenha(){
    return(
    <>
        <form id="form" className="form">
            <div className="form-content">
                <input type="text" id="login" placeholder="Digite a nova senha"/>
                <input type="password" id="senha" placeholder="Confirme a senha"/>
                <Link to='/'><button>Confirmar</button></Link>
            </div>
        </form>
    </>
    )
}