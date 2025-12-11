import type { Metadata } from "next"
import QuizClientPage from "./QuizClientPage"

export const metadata: Metadata = {
  title: "Marketing Plan Quiz | Femur",
  description: "Answer 3 questions to get a recommended growth plan.",
}

export default function QuizPage() {
  return <QuizClientPage />
}
