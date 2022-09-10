import styled from 'styled-components';

export const BookDesctiptionAndButtonStyle = styled.div<{isLoggedIn: boolean}>`
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: relative;
        width: 215%;
        top: 70px;
        right: 115%;
    }

.bookDescription__h {
    margin-top: 31px;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
}

.bookDescription {
    width: 100%;
    pre {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #344966;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 12px;
        line-height: 18px;
    }
    }
}

.buyingButton {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 88px;
    margin-top: 74px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        margin-top: 30px;
    }
    div {
        width: 39%;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 46.5%;
        }
        span{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #344966;
        }
    }
    input {
        width: 100%;
        height: 50px;
        margin-top: 14px;
        border: none;
        border-radius: 16px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 12px;
            line-height: 18px;
        }
    }
}

.active {
    background: #344966;
    color: #F0F4EF;
}

.notAvailable {
    background: #B9BAC4;
    color: #F0F4EF;
}
`;
