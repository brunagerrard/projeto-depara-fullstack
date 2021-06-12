/** @format */

import Link from 'next/link'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding: 15px;
  height: 100%;
  transition: margin 0.2s;
  &:hover {
    box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.richYellow};
    margin-left: 5px;
  }
  img {
    width: 80px;
    border-radius: 50%;
    margin-right: 5%;
    @media (max-width: 800px) {
      width: 40px;
    }
  }
  h2 {
    font: 600 1.1rem Inter, sans-serif;
    color: ${({ theme }) => theme.colors.maroon};
    margin-bottom: 0.5em;
    @media (max-width: 800px) {
      font-size: 0.9rem;
    }
  }
  p {
    font: 500 0.8rem Inter, sans-serif;
    color: #bbb;
  }
`

function Restaurant({ restaurant }) {
  return (
    <Link href='/restaurants/[slug]' as={`/restaurants/${restaurant.slug}`}>
      <a style={{ textDecoration: 'none' }}>
        <Card>
          <img src={restaurant.image} />
          <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
          </div>
        </Card>
      </a>
    </Link>
  )
}

export default Restaurant
