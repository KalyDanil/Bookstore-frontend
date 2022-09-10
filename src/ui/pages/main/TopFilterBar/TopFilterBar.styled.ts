import styled from 'styled-components';

export const TopFilterBarStyle = styled.div`
    width: 88.8%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 110px;
    font-family: Poppins;
    line-height: 27px;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 96.4%;
    }

.catalog__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        position: relative;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: relative;;
    }
}

h1 {
    margin-top: 0;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    font-weight: 700;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        position: absolute;
        top: -60px;
        font-size: 32px;
        line-height: 48px;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        position: absolute;
        top: -70px;
        font-size: 32px;
        line-height: 48px;
    }
}

.catalog__header-select {
    position: relative;
    width: 49%;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 833px) and (max-width:1439px) {
        width: 100%;
    }
    @media screen and (min-width: 320px) and (max-width:833px) {
        flex-direction: column;
        width: 100%;
    }
}

.select-genre__li {
    position: relative;
    span {
        position: absolute;
        top: 3px;;
        left: 34px;
    }
}

.select-genre__checkbox {
    -webkit-appearance: none;
    display: inline-flex;
    ::after {
        padding-top: 2px;
        content: '';
        width: 24px;
        height: 24px;
        background: url(./assets/image/noChecked.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
}

.select-genre__checkbox:checked::after {
    background-image: url(./assets/image/checked.svg);
  }

.select-genre__button {
    -webkit-appearance: none;
    width: 100%;
    height: 48px;
    background: #F0F4EF;
    background-color: rgb(240, 244, 239, 0.5);
    border: none;
    border-radius: 16px;
    color: #344966;
    font-size: 18px;
    line-height: 28px;
    padding-left: 17px;
    padding-right: 66.3%;
}
`;
