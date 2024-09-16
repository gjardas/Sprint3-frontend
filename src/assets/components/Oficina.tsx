import { Link } from 'react-router-dom'
import './Perfil.css'
import oficina1 from '../oficina1.jpg'
import oficina2 from '../oficina2.webp'
export default function Oficina(){

    return(
<>
    <div className='container-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={oficina1}alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Oficina Hyper - 1.2km - R$80</p>
        </div>
    </div>
    </div>
    <div className='container-perfil'>
    <div className='fundo-perfil'>
    <div className="foto">
            <img src={oficina2}alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Oficina Daora - 450m - R$100</p>
        </div>
        </div>
        </div>
        <form id="form" className="form">
            <div className="form-content">
            <Link to='/OrcamentoFinal'><button>Continuar</button></Link>
            </div>
        </form>
        </>
    )
}