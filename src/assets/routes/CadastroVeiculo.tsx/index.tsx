import FormularioVeiculo from "../../components/FormularioVeiculo";
import Perfil from "../../components/Perfil";

export default function CadastroVeiculo(){
    return(
    <>
        <h1>Cadastro Veiculo</h1>
        <div className="Container">
        <Perfil/>
        <FormularioVeiculo/>
        </div>
    </>
    );
}