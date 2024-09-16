import { Link } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar";
import Pecas from "../../components/Pecas";

export default function OrcamentoPeca(){
    return(
        <>
        <Link to='/Chat'><BotaoVoltar/></Link>
        <h1>Orcamento de Peças</h1>
        <Pecas/>
        </>
    );
}