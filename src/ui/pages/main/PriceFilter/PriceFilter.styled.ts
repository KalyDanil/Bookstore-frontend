import styled from 'styled-components';

export const PriceFilterStyle = styled.div<{selectedFilterButton: string}>`
    position: relative;
    z-index: 3;
    width: 31%;
    height: 48px;
    border: none;
    border-radius: 16px;
    @media screen and (min-width: 320px) and (max-width:833px) {
        width: 100%;
        margin-bottom: 20px;
    }

.select-price__slider {
    display: ${(props) => (props.selectedFilterButton === 'price' ? '' : 'none')};
    position: relative;
    width: 413px;
    height: 151px;
    background: #F0F4EF;
    border-radius: 16px;
    margin-top: 26px;
    img {
        user-select: none;
        position: absolute;
        top: -10px;
        left: 10px;
    }
    @media screen and (min-width: 320px) and (max-width:420px) {
        width: 280px;
    }
}
  
.price-controls span {
    width: 50px;
    margin: 0;

    color: inherit;
    font: inherit;

    background: none;
    border: none;
    outline: none;
}

.bar {
    position: absolute;
    width: 91.4%;
    height: 12px;
    top: 50px;
    left: 4.3%;
    background: #D6D8E7;
    border-radius: 40px;    
}

.bar2 {
    user-select: none;
    position: absolute;
    width: 91.4%;
    height: 12px;
    top: 50px;
    left: 4.3%;
    background: #BFCC94;
    border-radius: 40px;
}
  
.range-toggle {
    user-select: none;
    position: absolute;
    top: 40px;
    width: 32px;
    height: 32px;
    background: #F7F7FC;
    border: 2px solid #BFCC94;
    box-sizing: border-box;
    border-radius: 40px;
}
  
.range-toggle-min {
    left: 4.3%;
}
  
.range-toggle-max {
    left: 88%;
    @media screen and (min-width: 320px) and (max-width:833px) {
        left: 88%;
    }
}

.minAndMaxPrice {
    user-select: none;
    position: absolute;
    width: 91%;
    display: flex;
    justify-content: space-between;
    top: 77px;
    left: 4.3%;
    color: #344966;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    user-select: none;
}

.select-price__button {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 16px;
    background: rgb(240, 244, 239, 0.5);
    color: #344966;
    padding-right: 66.3%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.75px;
}

.select-price__arrow {
    transform: ${(props) => (props.selectedFilterButton === 'price' ? 'rotate(90deg)' : '')};
    z-index: -1;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 83.6%;
    top: 12px;
}
`;
