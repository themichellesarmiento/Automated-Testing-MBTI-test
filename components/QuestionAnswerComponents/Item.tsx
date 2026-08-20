import { mbtiQuestions } from '../../data/data'
import { ProgressBarProps } from '../../types/mbti';

const Item = ({ currentNumber }: ProgressBarProps) => {
  return (
    <>
      <div key={mbtiQuestions[currentNumber].id}>
        <h2 className='font-semibold'>{mbtiQuestions[currentNumber].question}</h2>
        {mbtiQuestions[currentNumber].options && mbtiQuestions[currentNumber].options.map(o => (
          <button key={o.type} className='flex mt-2 rounded-full w-full border-2 border-text-light p-1'><div className='mx-auto'>{o.text}</div></button>
        ))}
      </div>
    </>
  )
}

export default Item;