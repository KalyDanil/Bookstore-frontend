import styled from 'styled-components';

export const SortByFilterStyle = styled.div<{selectedFilterButton: string; sortBy: string}>`
    position: relative;
    width: 31%;
    z-index: 2;
    ::after {
        transform: ${(props) => (props.selectedFilterButton === 'sortBy' ? 'rotate(90deg)' : '')};
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

.select-sortBy__button {
    color: #0D1821;
    background: rgb(255, 255, 255, 0.5);
    -webkit-appearance: none;
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 16px;
    font-size: 18px;
    line-height: 28px;
    padding-right: 66.3%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.75px;
}

.select-sortBy__ul{
    display: ${(props) => (props.selectedFilterButton === 'sortBy' ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    width: 100%;
    padding-left: 5px;
    background: #F0F4EF;
    border-radius: 16px;
    padding-top: 16px;
    margin-top: 13px;
    img {
        position: absolute;
        top: -10px;
        left: 10px;
    }
    div {
        user-select: none;
        cursor: default;
        color: #B9BAC4;
        text-align: start;
        border: none;
        margin-bottom: 12px;
        background: transparent;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.75px;
    }
}
#${(props) => props.sortBy} {
    color: #344966;
}
`;
