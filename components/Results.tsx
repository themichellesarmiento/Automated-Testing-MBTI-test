import { ResultsProps } from "../types/mbti";

const Results = ({ resultData, reStart }: ResultsProps) => {
  return (
    <div>
      <h1>{resultData.title}</h1>
      <h3>{resultData.description}</h3>
      <button className='w-fit rounded-full bg-accent-two text-background font-semibold py-2 px-4 transition-colors hover:bg-accent-one hover:text-background mt-2 mx-auto'
        onClick={reStart}>
        Test Again
      </button>
    </div>
  )
}

export default Results;