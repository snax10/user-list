import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative; /* Adicionar essa propriedade */
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
        color: #FF0000; /* Cor do botão de fechar ao passar o mouse */
    }
`;
