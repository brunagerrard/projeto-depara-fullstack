import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: #ffffff;
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  box-shadow: 0px 1px 6px rgba(0,0,0,0.3);

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export default function Confirmation({ cartItems, showModal, setShowModal }) {
  if (!showModal) {
    return null;
  } else {
    return (
      <ModalWrapper>
        <Modal>
          this is the modal for confirmation
          {cartItems.map((item) => (
            <h2>{item.option}</h2>
          ))}
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      </ModalWrapper>
    );
  }
}
