import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  questionText: String,
  type: String,
  points: Number,
  options: [String],
  correctAnswer: Number,
  explanation: String,
  shuffleOptions: Boolean,
});

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    quizTitle: String,
    quizType: String,
    quizdesc:String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    maxAttempts: Number,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    publish: Boolean,
    course: { type: String, ref: "CourseModel" },
    questions: [questionSchema],
  },
  { collection: "quizzes" }
);

export default quizSchema;
