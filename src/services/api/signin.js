import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";
import { api } from './authorization.js'


export default function Signin(email, password) {

    const navigate = useNavigate()

    const URL = "/signin";

    const payload = {
        email,
        password
    }

    const { global } = useGlobal

    console.log(payload)

    const promise = api.post(URL, payload);

    promise
        .then((response) => {

            console.log("entrou no promise do signin")
            const { token } = response.data

            console.log(token)
            global.token = token
            console.log(global.token)

            // navigate('/home')

        })
        .catch(err => {

            alert("Usuário ou/e senha incorreto(s)")

        });

        return
}