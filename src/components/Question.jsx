import { Buffer } from "buffer"
const Question = ({ question, answers }) => {
  //   console.log(answers)
  const questionStr = transformToText(question)
  function transformToText(b64string) {
    const buff = Buffer.from(b64string, "base64")
    const str = buff.toString("utf-8")
    return str
  }

  const answersElem = answers.map((a, idx) => (
    <button key={idx}>{transformToText(a)}</button>
  ))

  return (
    <div>
      <h4>{questionStr}</h4>
      {answersElem}
    </div>
  )
}
export default Question
