import styled from 'styled-components';

export const BookStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 23.8%;
    position: relative;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 31.6%;
        margin-bottom: 60px;  
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 46.5%;
        height: 400px;
        margin-bottom: 60px;   
    }
    @media screen and (min-width: 419px) and (max-width:833px) {
        margin-bottom: 35%;   
    }

.likeOnBook {
    position: absolute;
    top: 20px;
    left: 20px;
    user-select: none;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 38px;
        top: 16px;
        left: 16px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 25px;
        margin-bottom: 15px;
        top: 16px;
        left: 19px;
    }
}

.book {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    user-select: none;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 100%;
        height: auto;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
        margin-bottom: 15px;
    }
}

.bookNameAndAuthorDiv {
    margin-bottom: 20px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        height: 40px;
        margin-bottom: 40px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        height: 200px;
        margin-bottom: 0px;
    }
}

.bookName {
    width: 100%;
    font-weight: 500;
    color: #344966;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 135px;
        font-size: 14px;
        line-height: 21px;
    }
}

.author {
    width: 100%;
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    @media screen and (min-width: 320px) and (max-width:833px) {
        margin-bottom: 21px;
        font-size: 14px;
        line-height: 21px;
    }
}

.books__stars {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        margin-bottom: 0px;
    }
    span {
        color: #B9BAC4;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        @media screen and (min-width: 320px) and (max-width:833px) {
            margin-top: -5px;
            font-size: 16px;
            line-height: 24px;
        }
    }
}

.active {
    background: #344966;
    border-radius: 16px;
    width: 100%;
    height: 48px;
    color: #F0F4EF;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border: none;
    margin-bottom: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 29px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 29px;
    }
}

.notAvailable {
    background: #B9BAC4;
    border-radius: 16px;
    width: 100%;
    height: 48px;
    color: #F0F4EF;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border: none;
    margin-bottom: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        font-size: 16px;
        line-height: 28px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 16px;
        line-height: 28px;
    }
}
`;
