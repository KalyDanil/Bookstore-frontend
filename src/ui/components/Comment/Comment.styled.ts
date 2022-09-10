import styled from 'styled-components';

export const CommentStyle = styled.div`
    position: relative;
    background: #F0F4EF;
    border-radius: 16px;
    width: 57.6%;
    padding-top: 25px;
    img {
        position: absolute;
        width: 60px;
        height: auto;
        top: 30px;
        left: 30px;
        border-radius: 40px;
    }
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 82.9%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
    }

.comments__commentator {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    margin-bottom: 4px;
    padding-left: 110px;
    font-style: normal;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 14px;
        line-height: 21px;
    }
}

.comments__date {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.75px;
    padding-left: 110px;
    color: #B9BAC4;
    margin-top: 0;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 10px;
        line-height: 15px;
    }
}

.comments__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #344966;
    padding-bottom: 20px;
    padding-left: 110px;
    padding-right: 10px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 12px;
        line-height: 18px;
    }
}
`;
