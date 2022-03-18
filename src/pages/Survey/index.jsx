import { Link, useParams } from 'react-router-dom'

export default function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const lastPage = questionNumberInt - 1
  const nextPage = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        {questionNumberInt > 1 && <Link to={`/survey/${lastPage}`}>Précédent</Link>}
        {questionNumberInt < 10 ? (
          <Link to={`/survey/${nextPage}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </nav>
    </div>
  )
}
