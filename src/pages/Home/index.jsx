import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Button from '../../components/Button'
import HomeIllustration from '../../assets/home-illustration.svg'

const StyledContainer = styled.div`
  margin: 60px;
  padding: 80px;
  background-color: ${colors.backgroundLight};
  display: flex;
`
const StyledH1 = styled.h1`
  font-size: 50px;
  line-height: 80px;
  margin-right: 50px;
`
const StyledImage = styled.img`
  max-width: 46%;
`

export default function Home() {
  return (
    <StyledContainer>
      <div>
        <StyledH1>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledH1>
        <Button url="/freelances" $isFullLink>
          Faire le test
        </Button>
      </div>
      <StyledImage src={HomeIllustration} alt="Home Illustration" />
    </StyledContainer>
  )
}
