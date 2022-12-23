import { Link } from "react-router-dom"
import { Plan, Back, LogoPlan, Infos, InputPay, ConfirmScreen} from "./styled"

export default function PlanInfoPage(){

    return(
        <Plan>
            <Back>
                <Link to="/subscriptions">
                    <ion-icon name="arrow-back-outline"/>
                </Link>
            </Back>
            
            <LogoPlan>
            <img src="https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png"/>
                <h2>Driven Plus</h2>
            </LogoPlan>

            <Infos>
                <div>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.854 5.146C9.90056 5.19245 9.93751 5.24762 9.96271 5.30837C9.98792 5.36911 10.0009 5.43423 10.0009 5.5C10.0009 5.56577 9.98792 5.63089 9.96271 5.69163C9.93751 5.75238 9.90056 5.80755 9.854 5.854L8.104 7.604C8.01291 7.69498 7.89023 7.74732 7.76151 7.75012C7.63279 7.75291 7.50796 7.70595 7.413 7.619L6.663 6.934C6.57011 6.84339 6.51609 6.72022 6.51234 6.59051C6.5086 6.4608 6.55543 6.33472 6.64293 6.2389C6.73044 6.14308 6.85177 6.08504 6.98129 6.07703C7.1108 6.06903 7.23836 6.11169 7.337 6.196L7.734 6.558L9.146 5.146C9.19245 5.09944 9.24762 5.06249 9.30837 5.03729C9.36911 5.01208 9.43423 4.99911 9.5 4.99911C9.56577 4.99911 9.63089 5.01208 9.69163 5.03729C9.75238 5.06249 9.80755 5.09944 9.854 5.146V5.146ZM9.854 10.854C9.94789 10.7602 10.0007 10.633 10.0008 10.5004C10.0009 10.3677 9.94825 10.2404 9.8545 10.1465C9.76075 10.0526 9.63354 9.99982 9.50085 9.99972C9.36817 9.99963 9.24089 10.0522 9.147 10.146L7.734 11.558L7.337 11.196C7.23836 11.1117 7.1108 11.069 6.98129 11.077C6.85177 11.085 6.73044 11.1431 6.64293 11.2389C6.55543 11.3347 6.5086 11.4608 6.51234 11.5905C6.51609 11.7202 6.57011 11.8434 6.663 11.934L7.413 12.619C7.5079 12.7057 7.63252 12.7524 7.761 12.7496C7.88948 12.7468 8.01195 12.6947 8.103 12.604L9.853 10.854H9.854ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H5C5.13261 7 5.25979 6.94732 5.35355 6.85355C5.44732 6.75979 5.5 6.63261 5.5 6.5C5.5 6.36739 5.44732 6.24021 5.35355 6.14645C5.25979 6.05268 5.13261 6 5 6H2.5ZM2 11.5C2 11.3674 2.05268 11.2402 2.14645 11.1464C2.24021 11.0527 2.36739 11 2.5 11H5C5.13261 11 5.25979 11.0527 5.35355 11.1464C5.44732 11.2402 5.5 11.3674 5.5 11.5C5.5 11.6326 5.44732 11.7598 5.35355 11.8536C5.25979 11.9473 5.13261 12 5 12H2.5C2.36739 12 2.24021 11.9473 2.14645 11.8536C2.05268 11.7598 2 11.6326 2 11.5ZM3.085 1C3.18844 0.707422 3.38008 0.454129 3.63351 0.275028C3.88694 0.0959278 4.18967 -0.00016248 4.5 2.06237e-07H7.5C7.81033 -0.00016248 8.11306 0.0959278 8.36649 0.275028C8.61992 0.454129 8.81156 0.707422 8.915 1H10.5C10.8978 1 11.2794 1.15804 11.5607 1.43934C11.842 1.72064 12 2.10218 12 2.5V14.5C12 14.8978 11.842 15.2794 11.5607 15.5607C11.2794 15.842 10.8978 16 10.5 16H1.5C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 0 14.8978 0 14.5V2.5C0 2.10218 0.158035 1.72064 0.43934 1.43934C0.720644 1.15804 1.10218 1 1.5 1H3.085ZM4.5 1C4.36739 1 4.24021 1.05268 4.14645 1.14645C4.05268 1.24022 4 1.36739 4 1.5C4 1.63261 4.05268 1.75979 4.14645 1.85355C4.24021 1.94732 4.36739 2 4.5 2H7.5C7.63261 2 7.75979 1.94732 7.85355 1.85355C7.94732 1.75979 8 1.63261 8 1.5C8 1.36739 7.94732 1.24022 7.85355 1.14645C7.75979 1.05268 7.63261 1 7.5 1H4.5ZM3.085 2H1.5C1.36739 2 1.24021 2.05268 1.14645 2.14645C1.05268 2.24022 1 2.36739 1 2.5V14.5C1 14.6326 1.05268 14.7598 1.14645 14.8536C1.24021 14.9473 1.36739 15 1.5 15H10.5C10.6326 15 10.7598 14.9473 10.8536 14.8536C10.9473 14.7598 11 14.6326 11 14.5V2.5C11 2.36739 10.9473 2.24022 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H8.915C8.81156 2.29258 8.61992 2.54587 8.36649 2.72497C8.11306 2.90407 7.81033 3.00016 7.5 3H4.5C4.18967 3.00016 3.88694 2.90407 3.63351 2.72497C3.38008 2.54587 3.18844 2.29258 3.085 2V2Z" fill="#FF4791"/>
                    </svg>

                    <h3>
                        Benefícios:
                    </h3>
                </div>

                <span>
                    <p>1. Brindes exclusivos</p>
                    <p>2. Materiais bônus de web</p>
                </span>

                <div>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5584 1.27641C13.6493 0.895078 12.7395 0.75 11.8301 0.75C8.94328 0.749766 6.05672 2.21109 3.16992 2.21109C2.44594 2.21109 1.72242 2.11922 0.998437 1.88953C0.917109 1.86375 0.835547 1.85156 0.755859 1.85156C0.3525 1.85156 0 2.16375 0 2.59711V10.0329C0 10.3289 0.169453 10.6095 0.441563 10.7234C1.3507 11.1049 2.26055 11.25 3.16992 11.25C6.05672 11.25 8.94352 9.78867 11.8303 9.78867C12.5543 9.78867 13.2778 9.88055 14.0018 10.1102C14.0831 10.136 14.1647 10.1482 14.2444 10.1482C14.6477 10.1482 15.0002 9.83602 15.0002 9.40266V1.96711C15 1.67086 14.8305 1.39055 14.5584 1.27641V1.27641ZM1.125 3.09891C1.59656 3.21703 2.08875 3.27633 2.595 3.3082C2.45719 3.99703 1.85156 4.51617 1.125 4.51617V3.09891ZM1.125 9.77859V8.65875C1.93055 8.65875 2.58234 9.29789 2.6182 10.0978C2.09016 10.0554 1.59656 9.94992 1.125 9.77859V9.77859ZM7.5 8.25C6.4643 8.25 5.625 7.24242 5.625 6C5.625 4.75734 6.46453 3.75 7.5 3.75C8.53547 3.75 9.375 4.75734 9.375 6C9.375 7.24289 8.53523 8.25 7.5 8.25ZM13.875 8.90109C13.4644 8.7982 13.038 8.74055 12.6019 8.70328C12.7395 8.09203 13.2464 7.62797 13.875 7.54828V8.90109ZM13.875 3.36727C13.151 3.27562 12.5892 2.67117 12.567 1.92469C13.0249 1.97555 13.4597 2.0707 13.875 2.22141V3.36727Z" fill="#FF4791"/>
                    </svg>
                
                    <h3>
                        Preço:
                    </h3>
                </div>

                <span>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </span>
            </Infos>

            <InputPay>
                <form>
                    <input
                        type="text"
                        placeholder="Nome impresso no cartão"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Digitos do cartão"
                        required
                    />

                    <div>
                        <input
                            type="number"
                            placeholder="Código de segurança"
                            required
                        />

                    <input
                        type="month"
                        placeholder="Validade"
                        required
                    />
                    </div>

                    <button>ASSINAR</button>
                </form>
            </InputPay>

            <ConfirmScreen>
                <span>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.375 0.75H2.625C1.17578 0.75 0 1.92578 0 3.375V22.625C0 24.0742 1.17578 25.25 2.625 25.25H25.375C26.8242 25.25 28 24.0742 28 22.625V3.375C28 1.92578 26.8242 0.75 25.375 0.75ZM20.8031 16.6367C21.0656 16.8992 21.0656 17.3258 20.8031 17.5883L18.5883 19.8031C18.3258 20.0656 17.8992 20.0656 17.6367 19.8031L14 16.1336L10.3633 19.8031C10.1008 20.0656 9.67422 20.0656 9.41172 19.8031L7.19688 17.5883C6.93438 17.3258 6.93438 16.8992 7.19688 16.6367L10.8664 13L7.19688 9.36328C6.93438 9.10078 6.93438 8.67422 7.19688 8.41172L9.41172 6.19688C9.67422 5.93438 10.1008 5.93438 10.3633 6.19688L14 9.86641L17.6367 6.19688C17.8992 5.93438 18.3258 5.93438 18.5883 6.19688L20.8031 8.41172C21.0656 8.67422 21.0656 9.10078 20.8031 9.36328L17.1336 13L20.8031 16.6367Z" fill="white"/>
                    </svg>
                </span>

                <div>
                    <h2>
                        Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?
                    </h2>

                    <span>
                        <button>
                            Não
                        </button>

                        <button>
                            SIM
                        </button>
                    </span>
                </div>
            </ConfirmScreen>

        </Plan>
    )
}