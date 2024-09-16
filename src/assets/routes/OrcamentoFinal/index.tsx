import { Link } from "react-router-dom";
import FinalOrcamento from "../../components/FinalOrcamento";
import BotaoVoltar from "../../components/BotaoVoltar";

export default function OrcamentoFinal(){
    return(
        <>
        <Link to='/OrcamentoOficina'><BotaoVoltar/></Link>
        <h1>Orçamento final</h1>
        <FinalOrcamento/>
        </>
    )
}