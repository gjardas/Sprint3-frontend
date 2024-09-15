import FormularioLogin from "../../components/FormularioLogin";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="App">
        <h1>Login</h1>
        <FormularioLogin/>
        <p><Link to='/EsqueceuSenha'>ESQUECEU A SENHA?</Link></p>
        <br />
        <br />
        <p>Não tem uma conta? <Link to='/Cadastro'>CADASTRE-SE</Link></p>
      </div>
    );
}