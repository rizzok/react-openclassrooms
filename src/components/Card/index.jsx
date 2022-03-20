import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 25px 35px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  min-width: 18rem;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
`
const CardImage = styled.img`
  height: auto;
  width: 50%;
  border-radius: 50%;
  margin: 1.5rem;
`
const CardTitle = styled.span`
  font-size: 25px;
`

export default function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
}
