import { Link } from 'react-router-dom'
import './BotaoVoltar.css'
import './VisuChat.css'
export default function VisuChat(){
    return(
        <>
    <div className='conteiner-pag-chat'>
      <div className="chat-container">
        <div className="chat-box">
            <div className="mensagem envia">
                <div className="conteudo-mensagem">
                    Olá! Como posso ajudar você hoje?
                </div>
            </div>
            <div className="mensagem recebe">
                <div className="conteudo-mensagem">
                    Eu estou com problemas no meu carro.
                </div>
            </div>
            <div className="mensagem envia">
                <div className="conteudo-mensagem">
                    Ok, sabe me explicar o que está acontecendo?
                </div>
            </div>
            <div className="mensagem recebe">
                <div className="conteudo-mensagem">
                    Faz um barulho.
                </div>
            </div>
            <div className="barra-digitacao">
                <input type="text" placeholder="Digite uma mensagem..." />
                <button type="button">Enviar</button>
                <Link to='./orcamentopeca'><button type="button">✓</button></Link>
            </div>
        </div>
      </div>
    </div>
        </>
    )
}