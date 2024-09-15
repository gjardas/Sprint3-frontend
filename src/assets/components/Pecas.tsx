import { Link } from 'react-router-dom'
import './Perfil.css'
import bateria2 from '../bateria2.webp'
import bateria3 from '../Bateria3.jpg'
export default function Pecas(){

    return(
<>
    <div className='container-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={bateria2}alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Bateria Moura R$200</p>
        </div>
    </div>
    </div>
    <div className='container-perfil'>
    <div className='fundo-perfil'>
    <div className="foto">
            <img src={bateria3}alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Bateria Eletran R$220</p>
        </div>
        </div>
        </div>
        <form id="form" className="form">
            <div className="form-content">
            <Link to='/OrcamentoOficina'><button>Entrar</button></Link>
            </div>
        </form>
        </>


    )
}