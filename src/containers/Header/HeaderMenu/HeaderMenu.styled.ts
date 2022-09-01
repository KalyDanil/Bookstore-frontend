import styled from 'styled-components';

export const HeaderMenuStyle = styled.div<{isLoggedIn: boolean}>`
    position: relative;
    display: ${(props) => (props.isLoggedIn ? 'flex' : 'none')};
    justify-content: space-between;
    width: 200px;
    margin-left: 9.9%;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 41%;
        width: 51%;
    }
    img {
        cursor: pointer;
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 32px;
        }
    }

.header__menu-profileLink {
    width: 65px;
    height: 65px;
    border-radius: 40px;
    margin-left: 5px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: relative;
        top: 10px;
        width: 40px;
        height: 35px;
        margin-left: 0px;
    }
}

.header__menu-notification {
    position: absolute;
    top: 40px;
    left: 195px;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    background-color: #344966;
}

.header__menu-basketCounter {
    position: absolute;
    left: 45px;
    background: #BFCC94;
    border-radius: 40px;
    width: 23px;
    height: 20px;
    text-align: center;
    padding-top: 3px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #344966;
    @media screen and (min-width: 320px) and (max-width:833px) {
        left: 10px;
        top: 5px;
    }
}
`;
