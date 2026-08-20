export interface ProgressBarProps {
  currentNumber: number
}

export interface QAProps extends ProgressBarProps {
  selectAnswer: (type: string) => void;
  onPrev?: () => void;
}
