import styled from 'styled-components';

export const ModalStyle = styled.div`
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
  }
  
  .modal-dialog {
    width: 100%;
    max-width: 550px;
    background: white;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
  }
  
  .modal-header,
  .modal-footer {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .modal-header {
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;
  }
  .modal-footer {
    border-top: 1px solid #dbdbdb;
    justify-content: flex-end;
  }
  .modal-close {
    cursor: pointer;
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }
  .modal-body {
    overflow: auto;
  }
  .modal-content {
    padding: 1rem;
  }
  
  .modal-title {
    margin: 0;
  }
  
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
