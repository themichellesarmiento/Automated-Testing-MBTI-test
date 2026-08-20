'use client'

import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import QA from "../../components/QuestionAnswer";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0)

  return (
    <main className='flex flex-col'>
      <ProgressBar currentNumber={questionNumber} />
      <QA currentNumber={questionNumber} />
    </main>
  );
}