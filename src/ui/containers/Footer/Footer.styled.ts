import styled from 'styled-components';

export const FooterStyled = styled.footer`
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    height: 341px;
    background: #0D1821;
    margin-top: 154px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #F0F4EF;
    @media screen and (min-width: 320px) and (max-width:833px) {
        margin-top: 70px;
        height: 650px;
    }

div {
    display: flex;
    flex-direction: column;
}

.footer__firstDiv {
    width: 250px;
    margin-left: 5.5%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        margin-left: 20px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        margin-left: 5px;
    }
}

.footer__logo {
    width: 88px;
    height: auto;
    margin-top: 73px;
}

.footer__email {
    color: #F0F4EF;
    margin-top: 40px;
}

.footer__telephone {
    color: #F0F4EF;
}

.footer__navigationDiv {
    position: absolute;
    top: 73px;
    left: 35.6%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        left: 34.7%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        top: 242px;
        left: 15px;
    }
}

.footer__navigation {
    text-decoration: none;
    color: #F0F4EF;
}

.footer__mapDiv {
    position: absolute;
    top: 73px;
    left: 65.7%;
    width: 28.68%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 47%;
        left: 51.1%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: static;
        margin-top: 209px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        max-width: 495px;
        top: 242px;
        left: 15px;
    }
}

.footer__map {
    width: 100%;
    max-width: 600px;
    height: auto;
    @media screen and (min-width: 320px) and (max-width:833px) {
        max-width: 495px;
    }
}
`;
