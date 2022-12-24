import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import LinkStyle from "../../shared/LinkStyle"
import { SignUpLayout } from "./styled"
import Url from "../../constants/Url"

export default function SignUpPage(){
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function createAcc(e){
        e.preventDefault()
        const body =
        {
            email,
            name,
            cpf,
            password
        }

        const promisse = axios.post(`${Url}/auth/sign-up`, body)
        promisse.then(res => {
            alert("Cadastro concluído :)!")
            navigate("/")
        })
        promisse.catch((err) => alert(`Ocorreu um erro: ${err.response.data.message} :()`))
    }

    return(
        <SignUpLayout>
            <form onSubmit={createAcc}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button>CADASTRAR</button>
            </form>
            <LinkStyle to="/">Já possuí uma conta? Entre</LinkStyle>
        </SignUpLayout>
    )
}