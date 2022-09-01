import styled from 'styled-components';

export const BookBlockStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 88.8%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 90.6%;
        margin-top: 110px;   
    }
`;
