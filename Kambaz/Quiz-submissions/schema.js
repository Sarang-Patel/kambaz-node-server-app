import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    _id: String,
    quizId: { type: String, ref: "QuizModel" },
    studentId: { type: String, ref: "UserModel" },
    answers: Object,
    score: Number,
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "quiz-submissions" }
);

export default submissionSchema;
