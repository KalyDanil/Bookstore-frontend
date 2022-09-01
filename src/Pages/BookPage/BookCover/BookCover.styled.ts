import styled from 'styled-components';

export const BookCoverStyle = styled.div`
    position: relative;
    width: 40.7%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 48.6%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 46.5%;
        max-width: 150px;
    }

.bookCover {
    width: 100%;
    height: auto;
}

.bookLike {
    position: absolute;
    width: 59px;
    top: 30px;
    left: 82.9%;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 30px;
        top: 25px;
        left: 65%;
    }
}
`;
