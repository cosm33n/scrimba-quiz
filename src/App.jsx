import { useEffect, useState } from "react"
import "./App.css"
import Question from "./components/Question"

function App() {
  const [quizData, setQuizData] = useState(null)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&encode=base64")
      .then(res => res.json())
      .then(({ results }) => {
        const newQuizData = []
        results.map(r => {
          newQuizData.push({
            // id: idx,
            answers: shuffleArray([...r.incorrect_answers, r.correct_answer]),
            correctAns: r.correct_answer,
            question: r.question,
          })
        })
        setQuizData(newQuizData)
      })
  }, [])

  return (
    <div>
      {quizData &&
        quizData.map((q, idx) => (
          <Question key={idx} question={q.question} answers={q.answers} />
        ))}
    </div>
  )
}

export default App
