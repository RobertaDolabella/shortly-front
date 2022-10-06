import { BemVindos, Functionality, Functionalities, Header, Image } from "../styles/headerStyle.js"
import logoShortly from '../assets/logoShortly.jpg'
export default function HeaderLoggedIn(){
    return(
        <>
        <Header>
        <BemVindos>
                <h1>Seja Bem-vindo, Fulano</h1>
            </BemVindos>       
        <Functionalities>
            <Functionality>Home</Functionality>
            <Functionality>Ranking</Functionality>
            <Functionality>Sair</Functionality>
        </Functionalities>
        </Header>
        <Image> <img alt="app logo" src={logoShortly} width="300px"></img></Image>
       
        </>
)
   
}