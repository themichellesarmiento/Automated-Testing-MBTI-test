import { QAProps } from "../types/mbti";
import Item from "./QuestionAnswerComponents/Item";

const QA = ({ currentNumber }: QAProps) => {
  return (
    <div className='mb-2 flex flex-col mx-auto text-center'>
      <h2 className='font-bold uppercase text-accent-two'>Question {currentNumber + 1}</h2>
      <Item currentNumber={currentNumber} />
    </div>
  )
}

export default QA;