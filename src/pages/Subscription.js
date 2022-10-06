import HeaderLoggedOut from "../components/HeaderLoggedOut";
import { Input, ConfirmButton, Container, Hover } from '../assets/css/styled.js'
import { useState } from "react";
import Signup from "../services/api/signup.js";
import { useNavigate } from "react-router-dom";
export default function Subscription() {


    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirmarSenha, setConfirmarSenha] = useState();

    // const navigate = useNavigate();

    // function IrParaSignin() {

    //     navigate('/')
    // }


    function checkInfo(e) {

        e.preventDefault();

        if (!nome || !email || !senha || !confirmarSenha) {
            throw alert("Por favor, preencha todos os campos")

        }
        if (senha !== confirmarSenha) {
            throw alert("As senhas não são iguais")

        }

        Signup(nome, email, senha, confirmarSenha)

        // IrParaSignin()
    }

    return (
        <>
            <HeaderLoggedOut botao={"Home"} path={'/'} />
            <Container>

                <form>
                    <Hover>
                        <Input placeholder="Nome" type="name" onChange={(e) => setNome(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <Input placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <Input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <Input placeholder="Confirmar Senha" type="password" onChange={(e) => setConfirmarSenha(e.target.value)} ></Input>
                    </Hover>
                    <Hover>
                        <ConfirmButton type="submit" onClick={checkInfo}>Entrar</ConfirmButton>
                    </Hover>
                </form>

            </Container>
        </>
    )
}