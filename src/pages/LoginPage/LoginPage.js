import {LoginLayout, Logo} from "./styled"
import LinkStyle from "../../shared/LinkStyle"
import logo from "../../assets/logo.png"
import Url from "../../constants/Url"

import UserContext from "../../contexts/UserContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function LoginPage(){
    const navigate = useNavigate()

    const {setUserData} = useContext(UserContext)
    const {setToken} = useContext(UserContext)
    const {setName} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function Login(e){
        e.preventDefault()
        const body = {
            email,
            password
        }

        const promisse = axios.post(`${Url}/auth/login`, body)

        promisse.then(res => {
            const data = res.data

            const userInfos = {
                email: data.email,
                id: data.id,
                name: data.name,
                membership: data.membership,
                token: data.token
            }

            localStorage.setItem("userData", JSON.stringify(userInfos))
            setUserData(JSON.parse(localStorage.getItem("userData")))

            setToken(res.data.token)
            setName(res.data.name)

            const membership = res.data.membership;

            if(membership === null){
                navigate("/subscriptions")
            }else{
                navigate("/home")
            }

        })

        promisse.catch( err => {
            alert(err.response.data.message)
        })

    }

    return(
        <LoginLayout>
            <Logo src={logo} />
            <form onSubmit={Login}>
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

                <button>ENTRAR</button>
            </form>
            <LinkStyle to="/sign-up">Não possuí uma conta? Cadastre-se</LinkStyle>
        </LoginLayout>
    )
}