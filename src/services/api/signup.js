import { useGlobal } from "../../context/globalContext";
import { api } from './authorization.js'
import { notificaçãoCriação } from "../../notifications/notifications.js";
import { useNavigate } from "react-router-dom";

export default function Signup(name, email, password, confirmPassword) {

    const URL = "/signup";

    const payload = {
        name,
        email,
        password,
        confirmPassword
    }

    // const navigate = useNavigate();

    const promise = api.post(URL, payload);

    promise
    .then(() => {

        console.log("ta aqui no promise")
        // navigate('/')
alert("gezuuuis")
       notificaçãoCriação()
    })
    .catch(() => {
        console.log("entrou no catch")
        throw alert("Algo deu errado")


    });
}