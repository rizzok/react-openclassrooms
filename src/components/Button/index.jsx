import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 10px 30px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  ${({ $isFullLink }) =>
    $isFullLink &&
    `
      color: white;
      border-radius: 30px;
      background-color: ${colors.primary};
    `}
`

export default function Button({ url, children, $isFullLink = false }) {
  return (
    <StyledLink to={url} $isFullLink={$isFullLink}>
      {children}
    </StyledLink>
  )
}
