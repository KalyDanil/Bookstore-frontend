import styled from 'styled-components';

export const StarStyle = styled.div`
img {
        width: 23px;
        height: 23px;
        @media screen and (min-width: 833px) and (max-width:1439px) {
            width: 18px;
            height: 18px;
        }
        @media screen and (min-width: 320px) and (max-width:833px) {
            width: 13px;
            height: 13px;
            margin-bottom: 17px;
        }
    }
`;
