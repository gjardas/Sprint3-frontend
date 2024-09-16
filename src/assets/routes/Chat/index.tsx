import { Link } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar";
import VisuChat from "../../components/VisuChat";

export default function Chat(){
    return(
        <>
        <Link to='/Home'><BotaoVoltar/></Link>
        <h1>Chat</h1>
        <VisuChat/>
    </>
    );
}