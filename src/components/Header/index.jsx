import Button from '../Button/index'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'
import { Link } from 'react-router-dom'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const StyledLogo = styled.img``

export default function Header() {
  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledLogo src={DarkLogo} alt="Logo" />
      </Link>
      <nav>
        <Button url={'/'}>Accueil</Button>
        <Button url="/freelances">Profils</Button>
        <Button url="/survey/1" $isFullLink>
          Faire le test
        </Button>
      </nav>
    </StyledHeader>
  )
}
