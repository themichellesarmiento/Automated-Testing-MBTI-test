import { Question } from "../data/data";

export interface ProgressBarProps {
  currentNumber: number
}

export interface QAProps extends ProgressBarProps {
  selectAnswer?: (type: number) => void;
  onPrev?: () => void;
}
