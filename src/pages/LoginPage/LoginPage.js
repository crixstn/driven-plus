import {LoginLayout, Logo} from "./styled"
import LinkStyle from "../../shared/LinkStyle"
import logo from "../../assets/logo.png"

import { useState } from "react"

export default function LoginPage(){
    return(
        <LoginLayout>
            <Logo src={logo} />
            <form>
                <input
                    type="email"
                    placeholder="E-mail"
                />

                <input
                    type="password"
                    placeholder="Senha"
                />

                <button>ENTRAR</button>
            </form>
            <LinkStyle to="/sign-up">Não possuí uma conta? Cadastre-se</LinkStyle>
        </LoginLayout>
    )
}