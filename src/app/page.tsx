'use client'

import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import QA from "../../components/QuestionAnswer";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(3)
  const [selectedAnswers, setSelectedAnswers]= useState<string[]>([]);

  return (
    <main className='flex flex-col'>
      <ProgressBar currentNumber={questionNumber} />
      <QA currentNumber={questionNumber} selectAnswer={()=>{}}/>
    </main>
  );
}