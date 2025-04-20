import * as dao from "./dao.js";

export default function QuizSubmissionRoutes(app) {
  app.post("/api/quiz-submissions", async (req, res) => {
    const submission = req.body;
    const result = await dao.submitQuiz(submission);
    res.send(result);
  });

  app.get("/api/quiz-submissions/student/:studentId", async (req, res) => {
    const { studentId } = req.params;
    const submissions = await dao.findSubmissionsByStudent(studentId);
    res.send(submissions);
  });

  app.get("/api/quiz-submissions/quiz/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const submissions = await dao.findSubmissionsForQuiz(quizId);
    res.send(submissions);
  });

  app.get(
    "/api/quiz-submissions/quiz/:quizId/student/:studentId",
    async (req, res) => {
      const { quizId, studentId } = req.params;      
      const result = await dao.findSubmissionsByQuizAndStudent(quizId, studentId);
      res.send(result);
    }
  );
}
