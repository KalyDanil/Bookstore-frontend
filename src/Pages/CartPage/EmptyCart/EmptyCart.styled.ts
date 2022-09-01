import styled from 'styled-components';

export const EmptyCartStyle = styled.div<{cartIsEmpty: boolean}>`
    display: ${(props) => (props.cartIsEmpty ? 'flex' : 'none')};
    flex-direction: row;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 86.5%;
        margin-left: 15px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        flex-direction: column-reverse;
        width: 290px;
    }
    img {
        width: 433px;
        height: auto;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            width: 350px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 290px;
            margin-top: 40px;
        }
    }
    div {
        width: 46%;
        margin-left: 109px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            width: 310px;
            margin-left: 62px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            margin-left: 0px;
            width: 290px;
        }
        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 60px;
            @media screen and (min-width: 833px) and (max-width:1439px) {
                font-size: 32px;
                line-height: 48px;
            }
            @media screen and (min-width: 320px) and (max-width:833px) {
                font-size: 18px;
                line-height: 27px;
            }
        }
        p {
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            color: #344966;
            @media screen and (min-width: 833px) and (max-width:1439px) {
                font-size: 16px;
                line-height: 24px;
            }
            @media screen and (min-width: 320px) and (max-width:833px) {
                font-size: 12px;
                line-height: 18px;
            }
        }
        input {
            width: 219px;
            height: 44px;
            background: #344966;
            border-radius: 16px;
            border: none;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #F0F4EF;
            margin-top: 20px;
            @media screen and (min-width: 320px) and (max-width:833px) {
                width: 290px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
`;
