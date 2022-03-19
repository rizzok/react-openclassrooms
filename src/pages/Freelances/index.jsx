import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

const FreelancesContainer = styled.div`
  text-align: center;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 20%;
`

const StyledH1 = styled.h1`
  margin-bottom: 2rem;
`

const StyledText = styled.p`
  color: ${colors.secondary};
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  margin-bottom: 4rem;
`

export default function Freelances() {
  return (
    <FreelancesContainer>
      <StyledH1>Trouvez votre prestataire</StyledH1>
      <StyledText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledText>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  )
}
