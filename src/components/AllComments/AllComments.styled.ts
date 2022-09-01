import styled from 'styled-components';

export const AllCommentsStyle = styled.div<{ isLoggedIn: boolean }>`
    margin-top: 110px;
    width: 88.8%;;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
        margin-top: 0px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 90.6%;
    }
    h1 {
        margin-bottom: 50px;
    }

.makingComments {
    display: ${(props) => (props.isLoggedIn ? 'flex' : 'none')};
    flex-direction: column;
    width: 57.6%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 82.9% ;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
    }
}

.makingComments__text {
    background: #F0F4EF;
    border: none;
    border-radius: 16px;
    width: calc(100%% - 24px);
    margin-top: 30px;
    padding-left: 24px;
    height: 128px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #344966;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 12px;
    }
    :focus {
        ::placeholder {
            visibility: hidden;
        }
    }
    ::placeholder {
        position: absolute;
        top: 20px;
        left: 24px;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.75px;
        color: #B9BAC4;
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-size: 12px;
        }
    }
}

.makingComments__button {
    margin-top: 30px;
    width: 276px;
    height: 50px;
    background: #344966;
    border-radius: 16px;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.75px;
    color: #F0F4EF;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 210px;
        height: 38px;
        font-size: 12px;
        line-height: 18px;
    }
}
`;
