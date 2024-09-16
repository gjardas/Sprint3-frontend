import { Link } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar";
import Oficina from "../../components/Oficina";

export default function Orcamento(){
    return(
        <>
        <Link to='/OrcamentoPeca'><BotaoVoltar/></Link>
        <h1>Orcamento da oficina</h1>
        <Oficina/>
        </>
    );
}