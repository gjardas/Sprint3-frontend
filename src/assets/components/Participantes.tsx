import Fernando from '../Fernando.jpeg'
import Nat from '../Nat.jpeg'
import Guilherme from '../Guilherme.jpeg'
export default function Participantes(){
    return(
        <>
        <h1>Participantes</h1>
        <div className='container-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={Guilherme} alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Guilherme Jardim RM 556814</p>
        </div>
    </div>
    </div>

    <div className='container-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={Nat} alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Nathalia Gomes RM 554945</p>
        </div>
    </div>
    </div>

    <div className='container-perfil'>
    <div className='fundo-perfil'>
        <div className="foto">
            <img src={Fernando} alt="Foto de perfil" />
        </div>
        <div className="nome-perfil">
            <p>Seu nome aqui</p>
        </div>
    </div>
    </div>
        </>
    )
}