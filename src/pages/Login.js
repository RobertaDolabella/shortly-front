import HeaderLoggedOut from "../components/HeaderLoggedOut";
import { Input, ConfirmButton, Container, Hover } from '../assets/css/styled.js'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "../services/api/signin";


export default function Login() {


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate()

    // function IrParaHome() {

    //     navigate('/home')
    // }


    async function checkInfo(e) {

        e.preventDefault();

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos")
        }

        Signin(email, senha)
        console.log("passou o signin")
        navigate('/home')
        // IrParaHome()
    }

    return (
        <>
            <HeaderLoggedOut botao={"Cadastre-se"} email={email} senha={senha} path={'/signup'} />
            <Container>

                <form>
                    <Hover>
                        <Input placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <Input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <ConfirmButton type="submit" onClick={checkInfo}>Entrar</ConfirmButton>
                    </Hover>
                </form>

            </Container>
        </>
    )
}