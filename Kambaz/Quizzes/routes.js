import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
    res.send(quizzes);
  });

  app.post("/api/quizzes", async (req, res) => {
    const quiz = req.body;
    console.log(quiz)
    const createdQuiz = await quizzesDao.createQuiz(quiz);
    res.send(createdQuiz);
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const updates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, updates);
    res.send(status);
  });

  app.get("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizzesDao.findQuizById(quizId);
    res.send(quiz);
  });
}
