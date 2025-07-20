import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Award } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
  onComplete?: (score: number) => void;
}

const QuizComponent: React.FC<QuizProps> = ({ title, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
      if (onComplete) {
        const score = calculateScore();
        onComplete(score);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const currentQ = questions[currentQuestion];
  const score = calculateScore();

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
          <div className="text-4xl font-bold mb-2">
            <span className={`${score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
              {Math.round(score)}%
            </span>
          </div>
          <p className="text-gray-600">
            You got {Math.round((score / 100) * questions.length)} out of {questions.length} questions correct
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Review Your Answers</h3>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="p-4 border rounded-lg">
                <div className="flex items-start space-x-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600">
                      Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {question.options[userAnswer]}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-gray-600">
                        Correct answer: <span className="text-green-600">
                          {question.options[question.correctAnswer]}
                        </span>
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">{question.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-6">{currentQ.question}</h3>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswers[currentQ.id] === index
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedAnswers[currentQ.id] === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQ.id] === index && (
                    <div className="w-full h-full rounded-full bg-white scale-50" />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            currentQuestion === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQ.id] === undefined}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedAnswers[currentQ.id] === undefined
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizComponent; 