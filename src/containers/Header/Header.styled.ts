import styled from 'styled-components';

export const HeaderStyled = styled.header<{isLoggedIn: boolean; headerButton: string | null}>`
    display: flex;
    width: 88%;
    height: 64px;
    margin: auto;
    margin-top: 24px;
    font-style: normal;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
    }

    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 90%;
        justify-content: space-between;
    }

img {
    width: 88px;
    height: auto;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 66px;
    }
}

.logOut {
    display: ${(props) => (props.isLoggedIn ? '' : 'none')};
    color: white;
    text-decoration: none;
    background-color: #344966;
    border: none;
    width: 18%;
    height: 44px;
    margin-top: 8px;
    margin-left: 7.6%;
    text-align: center;
    border-radius: 16px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.75px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        margin-left: 3%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: absolute;
        top: 128px;
        margin-left: 0;
        padding-left: 0;
        left: 15px;
        height: 45px;
        width: calc(100% - 30px);
    }
}

.header__catalog {
    cursor: pointer;
    margin-left: ${(props) => (props.isLoggedIn ? '7.8%' : '16.8%')};
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        margin-left: 3%;
    }  
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 14px;
        line-height: 21px;
    }
}

.header__search-div {
    position: relative;
    width: 49%;
    height: 100%;
    margin-left: 3.3%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 30.7%;
        margin-left: 9%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: absolute;
        top: 78px;
        margin-left: 0;
        padding-left: 0;
        left: 15px;
        height: 45px;
        width: calc(100% - 60px);
    }
    img {
        position: absolute;
        width: 24px;
        height: 24px;
        z-index: 2;
        top: 20px;
        left: 30px;
        @media screen and (min-width: 320px) and (max-width:833px) {
            top: 12px;
            left: 5px;
        }
    } 
}

.header__search {
    width: 100%;
    height: 62px;
    border-radius: 16px;
    font-size: 16px;
    border: none;
    background: #F0F4EF;
    padding-left: 60px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        padding-left: 30px;
    } 
    :focus-within {
        ::placeholder {
            visibility: hidden;
        }
    }
    ::placeholder {
        font-size: 16px;
        height: 24px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: absolute;
        top: 0;
        left: 0;
        height: 47px;
    } 
}

.header__button {
    display: ${(props) => (props.isLoggedIn ? 'none' : '')};
    color: white;
    text-decoration: none;
    background-color: #344966;
    border: none;
    width: 18%;
    height: 34px;
    padding-top: 10px;
    margin-top: 8px;
    margin-left: 7.6%;
    text-align: center;
    border-radius: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 28.7%;
        margin-left: 10.6%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 46.5%;
        font-size: 12px;
        line-height: 18px;
        height: 28px;
        margin-top: 12px;
    }
}

.logIn {
    display: ${(props) => (props.headerButton === 'LogIn' ? '' : 'none')};
}

.singUp {
    display: ${(props) => (props.headerButton === 'SingUp' ? '' : 'none')};
}
`;
