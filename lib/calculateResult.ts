import { QuizResult, results } from "../data/data";

export const calculateResult = (answers: string[]): QuizResult => {
  const responseKey = answers.join('');
  return results[responseKey] ?? results.DEFAULT
}