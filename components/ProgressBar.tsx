import { type ProgressBarProps } from "../types/mbti";

const ProgressBar = ({ currentNumber }: ProgressBarProps) => {

  const width = (currentNumber + 1) / 4 * 100;

  return (
    <div className='mb-4 mx-auto h-2 w-full rounded-full bg-text-light '>
      <div role='progressbar' className='h-full rounded-full transition-all duration-500 bg-accent-one' style={{ width: `${width}%` }} />
    </div>
  )
}

export default ProgressBar;