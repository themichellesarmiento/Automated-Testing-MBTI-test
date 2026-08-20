'use client'

import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import QA from "../../components/QuestionAnswerComponents/QuestionAnswer";
import { mbtiQuestions } from "../../data/data";
import Results from "../../components/Results";
import { calculateResult } from "../../lib/calculateResult";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const completedTest = selectedAnswers.length === mbtiQuestions.length;
  const testResult = calculateResult(selectedAnswers);

  const handleSelectedAnswers = (type: string) => {
    setSelectedAnswers(curr => [...curr, type])
    setQuestionNumber(curr => curr + 1) //move to the next question
  }

  const handlePrev = () => {
    setQuestionNumber(curr => Math.max(curr - 1, 0))
    setSelectedAnswers(curr => curr.slice(0, -1)) //drop last respomse
  }

  const handleRestart = () => {
    setQuestionNumber(0)
    setSelectedAnswers([])
  }

  return (
    <main className='flex flex-col flex-1 items-center mt-2'>
      {completedTest ? (
        <>
          <h1 className='font-bold text-lg md:text-2xl mb-2'>Your Result</h1>
          <Results resultData={testResult} reStart={handleRestart} />
        </>
      ) :
        <>
          <ProgressBar currentNumber={questionNumber} />
          <QA currentNumber={questionNumber} selectAnswer={handleSelectedAnswers} onPrev={handlePrev} />
        </>
      }
    </main>
  );
}