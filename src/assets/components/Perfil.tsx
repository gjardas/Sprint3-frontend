import './Perfil.css'
import FotoPerfil from '../FotoPerfil.jpg'

export default function Perfil(){

    return(
<>
    <div className='conatainer-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={FotoPerfil} alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Seu nome aqui</p>
        </div>
    </div>
    </div>
        </>
    )
}