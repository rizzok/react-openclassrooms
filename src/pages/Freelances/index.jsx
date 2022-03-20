import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const FreelancesContainer = styled.div`
  text-align: center;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [freelancersList, setFreelancersList] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8000/freelances')
      .then((response) => response.json())
      .then(
        ({ freelancersList }) => {
          setFreelancersList(freelancersList)
          setIsLoading(false)
        },
        (error) => {
          setError(error)
          setIsLoading(false)
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>
  }
  return (
    <FreelancesContainer>
      <StyledH1>Trouvez votre prestataire</StyledH1>
      <StyledText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledText>
      <CardsContainer>
        {isLoading ? (
          <Loader />
        ) : (
          freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))
        )}
      </CardsContainer>
    </FreelancesContainer>
  )
}
