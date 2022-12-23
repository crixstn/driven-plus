import {SubscriptionsLayout, Plans} from "./styled"
import { Link } from "react-router-dom"

export default function SubscriptionsPage(){

    return(
        <SubscriptionsLayout>
            <h1>Escolha seu Plano</h1>
            
            <Link to="/subscriptions/id">
                <Plans>
                    <img src="https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png"/>
                    <p>R$ VALOR</p>
                </Plans>
            </Link>

        </SubscriptionsLayout>
    )
}