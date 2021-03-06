import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.richYellow};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px;
  img {
    width: 80px;
    border-radius: 50%;
    margin-right: 10%;
  }
  h2 {
    font: 600 1.2rem Archivo, sans-serif;
    color: ${({ theme }) => theme.colors.maroon};
  }
  p {
    font: 400 1rem Poppins, sans-serif;
    color: #806161;
  }
`;

function Restaurant({ restaurant }) {
  return (
    <Link href="/restaurants/[id]" as={`/restaurants/${restaurant._id}`}>
      <a>
        <Card>
          <img src={restaurant.image} />
          <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default Restaurant;
