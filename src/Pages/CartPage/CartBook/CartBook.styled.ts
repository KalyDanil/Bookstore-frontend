import styled from 'styled-components';

export const CartBookStyle = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    margin-top: 70px;

.cartBook__cover {
    width: 197px;
    height: auto;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 255px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 135px;  
    }
}

.cartBook__info {
    margin-left: 20px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 46.5%;
    }
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 0;
        margin-top: 0;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            font-size: 32px;
            line-height: 48px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 14px;
        }
    }
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        margin-top: 0;
        margin-bottom: 50px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            font-size: 20px;
            line-height: 30px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 27px;
        }
    }
}

.cartBook__info-number{
    display: flex;
    flex-direction: row;
    width: 196px;
    justify-content: space-between;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 135px;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.75px;
    }
}

.circle {
    width: 32px;
    height: 32px;
    background: #F0F4EF;
    border-radius: 22px;
    img {
        margin-left: 11px;
        margin-top: 11px;
        user-select: none;
    }
}

.cartBook__info-price {
    margin-top: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 18px;
        line-height: 27px;
        margin-top: 44px;
        margin-bottom: 0px;
    }
}

.cartBook__line {
    position: absolute;
    width: 100%;
    top: 110%;
    @media screen and (min-width: 320px) and (max-width:833px) {
        top: 235px;
        background-color: #D6D8E7;
    }
}
`;
