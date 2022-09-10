import styled from 'styled-components';

export const BookInformationStyle = styled.div`
    width: 43.7%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 48.6%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 46.5%;   
    }

.bookInformation__name {
    font-style: normal;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 18px;
        line-height: 20px;   
    }
}

.bookInformation__author {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        font-size: 12px;
        line-height: 18px;
    }
}
`;
