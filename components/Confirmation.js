import styled from "styled-components"
import { Button } from "./CartButton"

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
`

const Modal = styled.div`
  background-color: #ffffff;
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    width: 500px;
  }

  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
    padding-bottom: 6px;
    margin-bottom: 1.2rem;
  }
`

const OrderDetails = styled.form``

const OrderItem = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: none;
  font: ${({ theme }) => theme.fonts.paragraph};
  font-size: 0.9rem;
  padding-bottom: .7rem;
`

export default function Confirmation({ cartItems, showModal, setShowModal }) {
  if (!showModal) {
    return null
  } else {
    return (
      <ModalWrapper>
        <Modal>
          <h4>Revise seu pedido:</h4>
          <OrderDetails>
            {cartItems.map(item => (
              <OrderItem
                key={item.id}
                value={item.option}
                name={`item${item.id}`}
                disabled
              />
            ))}
          </OrderDetails>
          <Button onClick={() => setShowModal(false)}>Cancelar</Button>
        </Modal>
      </ModalWrapper>
    )
  }
}