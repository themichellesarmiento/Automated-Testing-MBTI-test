import { mbtiQuestions } from '../../data/data'
import { type QAProps } from '../../types/mbti';

const Item = ({ currentNumber, selectAnswer }: QAProps) => {
  return (
    <>
      <div key={mbtiQuestions[currentNumber].id}>
        <h2 className='font-semibold text-lg'>{mbtiQuestions[currentNumber].question}</h2>
        {mbtiQuestions[currentNumber].options && mbtiQuestions[currentNumber].options.map(o => (
          <button key={o.type} className='flex mt-2 rounded-full w-full border-2 border-text-light p-1'
            onClick={() => selectAnswer(o.type)}>
            <div className='mx-auto'>{o.text}</div>
          </button>
        ))}
      </div>
    </>
  )
}

export default Item;