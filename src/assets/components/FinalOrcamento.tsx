import { Link } from 'react-router-dom'
import './Perfil.css'
import bateria2 from '../bateria2.webp'
import oficina2 from '../oficina2.webp'
export default function FinalOrcamento(){
    return(
        <>
        <h3>Orçamento final</h3>
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
            <img src={oficina2}alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Oficina Daora - 450m - R$100</p>
        </div>
        </div>
        </div> 

        <h3>Orçamento final: R$300 <br /> Marcar para o dia 16 ás 16h?</h3>
        
        <form id="form" className="form">
            <div className="form-content">
            <Link to='/Home'><button>Finalizar</button></Link>
            </div>
        </form>
        </>
    )
}