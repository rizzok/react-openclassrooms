import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/404.svg'

const Container = styled.div`
  margin: 60px;
  padding: 40px;
  background-color: ${colors.backgroundLight};
  text-align: center;
`
const StyledText = styled.p`
  color: #2f2e41;
  font-size: 31px;
  font-weight: bold;
  line-height: 36px;
  margin: 3rem 0;
`

export default function Error() {
  return (
    <Container>
      <StyledText>Oups...</StyledText>
      <img src={ErrorImg} alt="Erreur 404" />
      <StyledText>Il semblerait qu'il y ait un problème</StyledText>
    </Container>
  )
}
