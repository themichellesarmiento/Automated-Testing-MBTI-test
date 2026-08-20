import { QAProps } from "../types/mbti";
import Item from "./QuestionAnswerComponents/Item";

const QA = ({ currentNumber, selectAnswer, onPrev }: QAProps) => {
  return (
    <div className='mb-2 flex flex-col mx-auto text-center'>
      <h1 className='font-bold uppercase text-accent-two'>Question {currentNumber + 1}</h1>
      <Item currentNumber={currentNumber} selectAnswer={selectAnswer} />
      {currentNumber > 0 && (
        <button className='w-fit rounded-full bg-accent-two text-background font-semibold py-2 px-4 transition-colors hover:bg-accent-one hover:text-background mt-2 mx-auto'
          onClick={onPrev}>
          Previous
        </button>
      )}
    </div>
  )
}

export default QA;