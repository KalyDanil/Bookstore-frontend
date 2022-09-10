import styled from 'styled-components';

export const RecommendationsStyle = styled.div<{booksLength: number}>`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 88.8%;
    padding-top: 98px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 96.6%;
        margin-top: 0px;
        position: relative;   
    }
    h1 {
        display: ${(props) => (props.booksLength === 0 ? 'none' : '')};
        position: absolute;
        top: 0;
        left: 10px;
        @media screen and (min-width: 320px) and (max-width:833px) {
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            top: 50px;
        }
    }
`;
