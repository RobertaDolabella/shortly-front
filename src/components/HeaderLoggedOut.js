import { BemVindos, Functionality, Functionalities, Header, Image, GreenFunctionality } from "../styles/headerStyle.js"
import logoShortly from '../assets/logoShortly.jpg'
import Signin from "../services/api/signin.js"
import { useNavigate } from "react-router-dom"
export default function HeaderLoggedOut({ email, senha, botao, path}) {

const navigate = useNavigate()

function checkInfo(e) {

    e.preventDefault()

    if(!email || !senha ){
        alert("Por favor, preencha todos os campos")
    }
    
    Signin(email, senha)

}

    return (
        <>
            <Header>
                <BemVindos>
                </BemVindos>
                <Functionalities>
                    <GreenFunctionality onClick={(e)=>checkInfo()}>Entrar</GreenFunctionality>
                    <Functionality onClick={()=>navigate(path)}>{botao}</Functionality>
                </Functionalities>
            </Header>
            <Image> <img alt="app logo" src={logoShortly} width="300px"></img></Image>

        </>
    )

}