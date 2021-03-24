import styled from 'styled-components'

const Option = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
`

function RestaurantMenu({item}) {
    return (
        <Option>
            {item.option}
            {item.price}
        </Option>
    )
}

export default RestaurantMenu
