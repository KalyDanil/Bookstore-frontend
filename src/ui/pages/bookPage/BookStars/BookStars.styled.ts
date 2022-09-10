import styled from 'styled-components';

export const BookStarsStyle = styled.div<{isLoggedIn: boolean}>`
    display: flex;
    flex-direction: row;
    margin-top: 31px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        flex-direction: column;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        flex-direction: column;
        margin-top: 15px;
    }
    img {
        width: 27px;
        height: 27px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            width: 23px;
            height: 23px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 14px;
            height: 14px;
        }
    }
    span {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #B9BAC4;
    }

.bookRating {
    margin-right: 41px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        margin-bottom: 17px;
    }
    img {
        margin-right: 14px;
    }
    span {
        position: relative;
        top: -5px;
        @media screen and (min-width: 320px) and (max-width:833px) {
            top: 0px;
            left: -7px; 
        }
    }
}

.makingRatingDiv {
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 320px) and (max-width:833px) {
        flex-direction: column;
        margin-top: 10px;
    }
}

.starsToRate {
    display: ${(props) => (props.isLoggedIn ? 'flex' : 'none')};
    justify-content: space-between;
    margin-right: 41px;
    width: 208px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
        max-width: 177px;
    }
}

.defaultStarsToRate {
    display: ${(props) => (props.isLoggedIn ? 'none' : 'flex')};
    justify-content: space-between;
    margin-right: 41px;
    width: 208px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
        max-width: 177px;
    }
}

.rateThisBook {
    span {
        position: relative;
        top: -5px;
        left: 10px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            left: 0;
            top: 10px;
            font-size: 12px;
            line-height: 18px;
        }
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        img {
            display: none;
        }
    }
    
}
`;
