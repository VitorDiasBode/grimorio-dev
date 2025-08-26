import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #fdf6e3;
  border: 3px solid #8b5e3c;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 80%;
  box-shadow: 0 6px 15px rgba(0,0,0,0.5);
  font-family: "IM Fell English SC", serif;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #8b5e3c;
  color: #fdf6e3;
  border: none;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #a8734f;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const ModalText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const ModalButtons = styled.div`
    gap:10px;
    display: flex;
    justify-content: center;
`