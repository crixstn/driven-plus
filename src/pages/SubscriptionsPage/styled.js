import styled from "styled-components";
import { gray } from "../../constants/colorsButton";

export const SubscriptionsLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% 0;
    gap: 10px;
        h1{
            font-weight: 700;
            font-size: 32px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 15px;
        }
`
export const Plans = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;

    img{
        height: 65%;
    }

    p{
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        text-align: center;
    }
`
//style subscriptions/id
export const Plan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const Back = styled.div`
    width: 100%;
    display: flex;
    align-items: start;

    ion-icon{
        font-size: 35px;
        color: #FFFFFF;
    }
`
export const LogoPlan = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 35px 0 25px 0;

    img{
        width: 140px;
    }

    h2{
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        text-align: center;
    }
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    div{
        gap: 5px;
        display: flex;  
        align-items: center;
        margin-bottom: 8px;

        h3{
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    }

    span{
        margin-bottom: 15px;

        p{
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
        }
    }
`
export const InputPay = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        
        input{
            width: 145px;
        }
    }
`
export const ConfirmScreen = styled.div`
        position: absolute;
        z-index: 1;
        display: none;
        flex-direction: column;
        padding: 25px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);

        span{
            display: flex;
            justify-content: end;
        }

        div{
            width: 248px;
            height: 210px;
            background: #FFFFFF;
            border-radius: 12px;
            padding: 33px 22px 12px 22px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: auto;

            h2{
                font-weight: 700;
                font-size: 18px;
                line-height: 21px;
                text-align: center;
                color: #000000;
            }

            span{
                display: flex;
                justify-content: space-between;
                width: 100%;

                button:nth-child(1){
                    background: ${gray};
                }

                button{
                    width: 95px;
                }
            }

        }
`