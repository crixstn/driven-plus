import LinkStyle from "../../shared/LinkStyle"
import { SignUpLayout } from "./styled"

export default function SignUpPage(){
    return(
        <SignUpLayout>
            <form>
                <input
                    type="text"
                    placeholder="Nome"
                />

                <input
                    type="number"
                    placeholder="CPF"
                />

                <input
                    type="email"
                    placeholder="E-mail"
                />

                <input
                    type="password"
                    placeholder="Senha"
                />

                <button>CADASTRAR</button>
            </form>
            <LinkStyle to="/">Já possuí uma conta? Entre</LinkStyle>
        </SignUpLayout>
    )
}