'use client'

import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import QA from "../../components/QuestionAnswerComponents/QuestionAnswer";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);


  const handleSelectedAnswers = (type: string) => {
    setSelectedAnswers(curr => [...curr, type])
    setQuestionNumber(curr => curr + 1) //move to the next question
  }

  const handlePrev = () => {
    setQuestionNumber(curr => Math.max(curr - 1, 0))
    setSelectedAnswers(curr => curr.slice(0, -1)) //drop last respomse
  }

  return (
    <main className='flex flex-col'>
      <ProgressBar currentNumber={questionNumber} />
      <QA currentNumber={questionNumber} selectAnswer={handleSelectedAnswers} onPrev={handlePrev} />
    </main>
  );
}