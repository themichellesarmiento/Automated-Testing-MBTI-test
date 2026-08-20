import { mbtiQuestions } from '../../data/data'
import { type QAProps } from '../../types/mbti';

const Item = ({ currentNumber, selectAnswer }: QAProps) => {
  return (
    <>
      <div key={mbtiQuestions[currentNumber].id}>
        <h2 className='font-semibold text-lg'>{mbtiQuestions[currentNumber].question}</h2>
        {mbtiQuestions[currentNumber].options && mbtiQuestions[currentNumber].options.map(o => (
          <button key={o.type} className='flex mt-2 rounded-full w-full border border-text-light p-2 hover:bg-accent-one/95 hover:text-background'
            onClick={() => selectAnswer(o.type)}>
            <div className='mx-auto'>{o.text}</div>
          </button>
        ))}
      </div>
    </>
  )
}

export default Item;