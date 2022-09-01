import styled from 'styled-components';

export const HeaderBannerStyle = styled.div<{isLoggedIn: boolean}>`
    position: relative;
    width: 88%;
    height: 400px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    background: #F0F4EF;
    border-radius: 16px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96%;
        height: 289px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 90%;
        height: 505px;
        margin-top: 105px;
        margin-top: ${(props) => (props.isLoggedIn ? '105px' : '70px')};
    }

.background {
    position: relative;    
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 40.78%;
    margin-left: 8.4%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 408px;
        margin-left: 4.9%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 79.3%;
        text-align: center;
    }

    h1 {
        font-size: 40px;
        line-height: 60px;
        color: #0D1821;
        margin-bottom: 0;
        margin-top: 80px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            font-size: 32px;
            line-height: 48px;
            margin-top: 45px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 18px;
            line-height: 27px;
            margin-top: 20px;
        }
    }

    span {
        font-size: 20px;
        line-height: 30px;
        color: #344966;
        margin-top: 10px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            line-height: 24px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 14px;
            line-height: 21px;
        }
    }

    input {
        width: 44%;
        height: 44px;
        color: #F0F4EF;
        font-size: 16px;
        line-height: 24px;  
        background: #344966;
        border-radius: 16px;
        border: none;
        margin-top: 50px;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.75px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            width: 56.3%;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 86.9%;
            font-size: 12px;
            line-height: 18px;
            margin-top: 30px;
            margin-left: auto;
            margin-right: auto;
        }
    }
}

.books {
    position: absolute;
    width: 42.3%;
    max-width: 536px;
    height: auto;
    max-height: 262px;
    bottom: 0;
    left: 0;
    z-index: -1;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 43.3%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 80%;
        top: 0;
        left: 20%;
        max-width: 374px;
    }
}

.girl{
    position: absolute;
    width: 31.7%;
    height: auto;
    max-height: 400px; 
    right: 98px;
    bottom: 0;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 328px;
        right: 14px;
        top: -35px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 253px;
        bottom: 0;
        left: 6.2%;
    }
}
`;
