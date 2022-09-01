import styled from 'styled-components';

export const Books = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 88.8%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 96.6%;
        margin-top: 40px;
        position: relative;   
    }
`;
