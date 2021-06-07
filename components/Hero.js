/** @format */

import styled from 'styled-components'
import {
  faHamburger,
  faPizzaSlice,
  faPepperHot,
  faIceCream,
  faBacon,
  faBicycle,
  faMotorcycle,
  faBiking,
  faCookieBite,
  faDrumstickBite,
  faBeer,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
`

const Icons = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  z-index: 0;

  .floating-icons {
    width: 2.4rem;
    color: ${({ theme }) => theme.colors.ellisGrey};
    opacity: 0.8;
    animation: falling 7s infinite alternate;
  }

  .icons-12 {
    opacity: 0.4;
    color: ${({ theme }) => theme.colors.primaryRed};
    width: 2.8rem;
    animation: falling 17s infinite alternate;
  }
  .icons-9 {
    color: ${({ theme }) => theme.colors.faintRose};
    width: 2.8rem;
    animation: falling 10s infinite alternate;
  }
  .icons-7 {
    color: ${({ theme }) => theme.colors.meredithGrey};
    opacity: 0.8;
    width: 5.8rem;
    animation: falling 15s infinite alternate;
  }
  .icons-5 {
    color: ${({ theme }) => theme.colors.meredithGrey};
    width: 3.8rem;
    animation: falling 8s infinite alternate;
  }
  .icons-3 {
    color: ${({ theme }) => theme.colors.richYellow};
    width: 4.8rem;
    opacity: 0.5;
    animation: falling 10s infinite alternate;
  }
  .icons-2 {
    color: ${({ theme }) => theme.colors.ellisGrey};
    width: 3.4rem;
    animation: falling 22s infinite alternate;
  }

  @keyframes falling {
    0% {
      transform: translateY(100vh);
      opacity: 0;
      filter: blur(5px);
    }
    40% {
      transform: scale(0.7);
      opacity: 0.5;
    }
    80% {
      filter: blur(0);
      transform: scale(1);
    }
    100% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
`

function Hero() {
  const icons = [
    faDrumstickBite,
    faHamburger,
    faPizzaSlice,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faDrumstickBite,
    faPizzaSlice,
    faPepperHot,
    faIceCream,
    faBacon,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faBeer,
    faDrumstickBite,
    faHamburger,
    faPizzaSlice,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faPizzaSlice,
    faPepperHot,
    faDrumstickBite,
    faIceCream,
    faBacon,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faBeer,
    faHamburger,
    faPizzaSlice,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faPizzaSlice,
    faDrumstickBite,
    faPepperHot,
    faIceCream,
    faBacon,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faBeer,
  ]
  return (
    <Container>
      <Icons>
        {icons.map((i, j) => (
          <FontAwesomeIcon
            icon={i}
            key={`${i}.${j}`}
            id={`icon${j}`}
            className={
              j % 12 == 0
                ? 'icons-12'
                : j % 9 == 0
                ? 'icons-9'
                : j % 7 == 0
                ? 'icons-7'
                : j % 5 == 0
                ? 'icons-5'
                : j % 3 == 0
                ? 'icons-3'
                : j % 2 == 0
                ? 'icons-2'
                : 'floating-icons'
            }
          />
        ))}
      </Icons>
    </Container>
  )
}

export default Hero
