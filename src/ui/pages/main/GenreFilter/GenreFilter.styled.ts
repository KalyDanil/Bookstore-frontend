import styled from 'styled-components';

export const GenreFilterStyle = styled.div<{selectedFilterButton: string}>`
    position: relative;
    width: 31%;
    z-index: 4;
    ::after {
        transform: ${(props) => (props.selectedFilterButton === 'genre' ? 'rotate(90deg)' : '')};
        z-index: -1;
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        background: url(./assets/image/arrow.svg);
        color: #000000;
        background-repeat: no-repeat;
        top: 10px;
        left: 83.6%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
        margin-bottom: 20px;
    }

.select-genre__button {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.75px;
}

.select-genre__ul {
        display: ${(props) => (props.selectedFilterButton === 'genre' ? '' : 'none')};
        position: absolute;
        color: #344966;
        width: 100%;
        list-style-type: none;
        font-family: 'Poppins';
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        padding-left: 5px;
        padding-top: 15px;
        background: #F0F4EF;
        border-radius: 16px;

        img {
            position: absolute;
            top: -10px;
            left: 10px;
        }

        li {
            padding-bottom: 10px;
            input {
                margin-right: 5px;
            }
        }
}
`;
