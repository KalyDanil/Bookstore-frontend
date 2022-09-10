import styled from 'styled-components';

export const GenreStyleContainer = styled.li`
    position: relative;
    padding-bottom: 10px;
    input {
        margin-right: 5px;
    }
    span {
        position: absolute;
        top: 3px;;
        left: 34px;
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
`;
