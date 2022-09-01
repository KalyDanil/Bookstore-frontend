import styled from 'styled-components';

export const OpenButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 40px;
  left: 195px;
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: #344966;
  color: white;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  padding-top: 0px;
  @media screen and (min-width: 320px) and (max-width:833px) {
    position: static;
    margin-top: 15px;
  }
  img {
    width: 30px;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  background: #344966;
  border-radius: 16px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
`;
