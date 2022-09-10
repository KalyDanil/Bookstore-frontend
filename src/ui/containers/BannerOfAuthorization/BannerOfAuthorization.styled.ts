import styled from 'styled-components';

export const Banner = styled.div<{isLoggedIn: boolean}>`
    display: ${(props) => (props.isLoggedIn ? 'none' : '')};
    position: relative;
    margin-top: 97px;
    margin-left: auto;
    margin-right: auto;
    width: 88.8%;
    height: 400px;
    background: #F0F4EF;
    border-radius: 16px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.2%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 90.3%;
        height: 501px;
    }

.bannerKingdome{
position: absolute;
left: 8.4%;
top: -10px;
@media screen and (min-width: 833px) and (max-width:1439px) {
    width: 389px;
    left: 0;
    top: 95px;
}
@media screen and (min-width: 320px) and (max-width:833px) {
    width: 282px;
    top: 280px;
    left: 0;
}
}

.bannerFay{
position: absolute;
right:0;
top: -63px;
@media screen and (min-width: 833px) and (max-width:1439px) {
    width: 377px;
    left: 55%;
    top: 15px;
}
@media screen and (min-width: 320px) and (max-width:833px) {
    width: 246px;
    top: 0;
    right:0;
}
}

.banner__text {
position: relative;
width: 32.4%;
display: flex;
flex-direction: column;
margin-left: 59.1%;
z-index: 1;
@media screen and (min-width: 833px) and (max-width:1439px) {
    width: 48.7%;
    margin-left: 51.1%;
}
@media screen and (min-width: 320px) and (max-width:833px) {
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

h1 {
    margin-bottom: 10px;
    margin-top: 80px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        font-size: 32px;
        line-height: 48px;
        margin-top: 60px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 18px;
        line-height: 27px;
    }
}
span {
    margin-bottom: 50px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #0D1821;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 14px;
        line-height: 21px;
    }
}
input {
    width: 55.6%;
    height: 44px;
    background: #344966;
    border-radius: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border: none;
    letter-spacing: 0.75px;
    color: #F0F4EF;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 59.2%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 92%;
        max-width: 385px;
        margin-left: auto;
        margin-right: auto;
    }    
}
}
`;
