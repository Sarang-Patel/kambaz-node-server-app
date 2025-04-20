import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function submitQuiz(submission) {
  const newSubmission = {
    ...submission,
    _id: uuidv4(),
    submittedAt: new Date(),
  };
  return model.create(newSubmission);
}

export function findSubmissionsByStudent(studentId) {
  return model.find({ studentId });
}

export function findSubmissionsForQuiz(quizId) {
  return model.find({ quizId });
}

export const findSubmissionsByQuizAndStudent = (quizId, studentId) => {
  return model.find({ quizId, studentId }).sort({
    submittedAt: -1,
  });

};
