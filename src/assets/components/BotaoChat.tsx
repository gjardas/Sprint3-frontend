import './Formularios.css'
import { Link } from 'react-router-dom'
export default function BotaoChat (){

    return( 
        <><div className="form">
            <Link to='/Chat'><button>Iniciar chat</button></Link>
            </div>
        </>
)
}