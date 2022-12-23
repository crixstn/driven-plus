import { HomeLayout, Header, Buttons, BottomButtons} from "./styled";

export default function Home(){
    return(
        <HomeLayout>
            <Header>
                <img src="https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png"/>
                <ion-icon name="person-circle-sharp"></ion-icon>
            </Header>
            <h1>Olá, fulano</h1>
            <Buttons>
                <div>
                    <button>Solicitar Brindes</button>
                    <button>Materiais bônus de web</button>
                </div>

                <BottomButtons>
                    <button>Mudar plano</button>
                    <button>Cancelar plano</button>
                </BottomButtons>
            </Buttons>

        </HomeLayout>
    )
}