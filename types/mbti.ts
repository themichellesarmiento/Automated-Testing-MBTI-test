import { QuizResult } from "../data/data";

export interface ProgressBarProps {
  currentNumber: number
}

export interface QAProps extends ProgressBarProps {
  selectAnswer: (type: string) => void;
  onPrev?: () => void;
}

export interface ResultsProps {
  resultData : QuizResult
  reStart:()=>void;
}
