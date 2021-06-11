import styled from 'styled-components'

function OrderHistory({userData}) {
    const {orders} = userData
    return (
        <div>
            {orders.map(o => <h1 key={o._id}>{o.restaurant}</h1>)}
        </div>
    )
}

export default OrderHistory
