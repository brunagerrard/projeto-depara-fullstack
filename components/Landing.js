import styled from 'styled-components'
import {
  faCarrot,
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
  faLemon,
  faCheese,
  faBirthdayCake,
  faWineBottle,
  faWineGlassAlt,
  faBeer,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  max-width: 100%;
`

const Icons = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15rem;
  //  transform: rotate(8deg);

  .floating-icons {
    width: 2.4rem;
    color: ${({theme}) => theme.colors.ellisGrey};
    animation: falling 60s infinite alternate;
  }

  #icon80,
  #icon60,
  #icon15,
  #icon20,
  #icon50,
  #icon90 {
    filter: blur(1px);
    color: ${({theme}) => theme.colors.faintRose};
    width: 2.8rem;
    animation: falling 10s infinite alternate;
  }
  #icon2,
  #icon34,
  #icon78,
  #icon94,
  #icon22,
  #icon57 {
    color: ${({theme}) => theme.colors.richYellow};
    opacity: 0.9;
    width: 5.8rem;
    animation: falling 15s infinite alternate;
  }
  #icon0,
  #icon10,
  #icon15,
  #icon20,
  #icon50,
  #icon75 {
    color: ${({theme}) => theme.colors.ellisGrey};
    width: 3.8rem;
    animation: falling 8s infinite alternate;
  }
  #icon14,
  #icon41,
  #icon27,
  #icon36,
  #icon53,
  #icon78 {
    filter: blur(1px);
    color: ${({theme}) => theme.colors.primaryRed};
    width: 3.4rem;
    animation: falling 22s infinite alternate;
  }

  @keyframes falling {
    0% {
      transform: translateY(700px);
    }
    100% {
      transform: translateY(-1000px);
    }
  }
`

const LandingContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 3rem;

  img {
    width: 200px;
    z-index: 1;
  }
`

const WelcomeText = styled.h1`
  font: ${({ theme }) => theme.fonts.smallParagraph};
  font-size: 1.1rem;
  margin: 2rem 0;
  z-index: 1;
`

export default function Landing() {
  const icons = [
    faCarrot,
    faHamburger,
    faPizzaSlice,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faPizzaSlice,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faPepperHot,
    faIceCream,
    faBacon,
    faCarrot,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faLemon,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faBeer,
    faCarrot,
    faHamburger,
    faPizzaSlice,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faPizzaSlice,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faPepperHot,
    faIceCream,
    faBacon,
    faCarrot,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faLemon,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faBeer,
    faCarrot,
    faHamburger,
    faPizzaSlice,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faBeer,
    faPepperHot,
    faIceCream,
    faBacon,
    faBicycle,
    faMotorcycle,
    faBiking,
    faCookieBite,
    faPizzaSlice,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
    faPepperHot,
    faIceCream,
    faBacon,
    faCarrot,
    faHamburger,
    faBicycle,
    faDrumstickBite,
    faLemon,
    faCheese,
    faBirthdayCake,
    faWineBottle,
    faWineGlassAlt,
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
            className='floating-icons'
          />
        ))}
      </Icons>
      <LandingContent>
        <img
          src='/images/logodepara.svg'
          alt='Logotipo da aplicação de_para, com a ilustração de uma bicicleta formada por símbolos comunistas. O pneu dianteiro é similar à engrenagem de uma máquina, o traseiro é uma foice e o guidão o martelo.'
          id='logo'
        />
        <WelcomeText>Tecnologia a serviço dos trabalhadores.</WelcomeText>
      </LandingContent>
    </Container>
  )
}
