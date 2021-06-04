import styled from 'styled-components'

const Modal = styled.div`
    background-color: #ffffff;
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export default function Confirmation({cartItems}) {
    return (
        <Modal>
            this is the modal for confirmation
            {cartItems.map(item => <h2>{item.option}</h2>)}
        </Modal>
    )
}