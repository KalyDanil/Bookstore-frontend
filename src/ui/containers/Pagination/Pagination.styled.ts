import styled from 'styled-components';

export const PaginationStyle = styled.div<{pageCount: number}>`
display: flex;
justify-content: space-between;
width: 18.6%;
margin-left: auto;
margin-right: auto;
height: 24px;
margin-top: 80px;
img {
    display: ${(props) => (props.pageCount === 0 ? 'none' : '')};
}
@media screen and (min-width: 833px) and (max-width:1439px) {
    width: 33.3%;
    margin-top: 50px;
}
@media screen and (min-width: 320px) and (max-width:833px) {
    width: 83.7%;
    margin-top: 0px;
}
`;
