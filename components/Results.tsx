import { ResultsProps } from "../types/mbti";

const Results = ({ resultData, reStart }: ResultsProps) => {
  return (
    <div>
      <h1 className='font-semibold uppercase text-lg md:text-2xl mb-1 text-accent-one'>{resultData.title}</h1>
      <h3 className='font-medium text-lg md:text-xl'>{resultData.description}</h3>
      <button className='w-fit rounded-full bg-accent-two text-background font-semibold py-2 px-4 transition-colors hover:bg-accent-one hover:text-background mt-2 mx-auto'
        onClick={reStart}>
        Test Again
      </button>
    </div>
  )
}

export default Results;