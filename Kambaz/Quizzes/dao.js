import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createQuiz(quiz) {
  const quizWithId = {
    ...quiz,
    _id: uuidv4()
    // questions: quiz.questions.map(q => ({ ...q, _id: uuidv4() })),
  };
  return model.create(quizWithId);
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}

export function findQuizById(quizId) {
  return model.findById(quizId);
}
