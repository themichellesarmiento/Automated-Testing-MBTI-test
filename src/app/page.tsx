'use client'

import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";

export default function Home() {
  const [questionNumber, setQuestionNumber]= useState(0)
  
  return (
    <main className='flex'>
      <ProgressBar currentNumber={questionNumber} />
    </main>
  );
}