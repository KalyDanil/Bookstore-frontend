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
    margin-top: 120px;
    position: relative;   
}

div {
    display: flex;
    flex-direction: column;
}
`;

export const BooksPagesControler = styled.div<{page:string}>`
    display: flex;
    justify-content: space-between;
    width: 18.6%;
    margin-left: auto;
    margin-right: auto;
    height: 24px;
    margin-top: 80px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 33.3%;
        margin-top: 50px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 83.7%;
        margin-top: 20px;
    }
    div {
        width: 41.4%;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        img {
            border-radius: 40px;
            width: 13px;
            height: 13px;
        }
        
    }
    #p${(props) => props.page} {
        background-color: black;
    }
`;
