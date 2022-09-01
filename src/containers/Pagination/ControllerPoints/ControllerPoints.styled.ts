import styled from 'styled-components';

export const ControllerPointStyle = styled.div<{page:string}>`
    /* width: 41.4%; */
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    img {
        margin-left: 30px;
        margin-right: 30px;
        border-radius: 40px;
        width: 13px;
        height: 13px;
    }
    
#p${(props) => props.page} {
    background-color: black;
}
`;
