import styled from "styled-components";
import { red } from "../../constants/colorsButton";

export const HomeLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    h1{
        margin: auto;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 55px;
    }
`
export const Header = styled.div`
    display: flex;
    padding: 25px 30px;
    justify-content: space-between;

    img{
        width: 75px;
    }

    ion-icon{
        font-size: 45px;
        color: #FFFFFF;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    div{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`

export const BottomButtons = styled.div`
    padding: 25px 0;
    position: fixed;
    bottom: 0;

    button:nth-child(2){
        background: ${red};
    }
`