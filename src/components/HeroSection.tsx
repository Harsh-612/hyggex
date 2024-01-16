import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import circleLogo from "../assets/Frame 41.png";
const HeroSection: React.FC<{
  fullscreen: boolean;
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ fullscreen, setFullscreen }) => {
  const [flashcardData, setFlashCardData] = useState([
    {
      question: "What is a relation in mathematics?",
      answer:
        "A relation is a set of ordered pairs, where each element in the domain is related to an element in the codomain.",
    },
    {
      question: "How is a function different from a relation?",
      answer:
        "A function is a special type of relation where each element in the domain is related to exactly one element in the codomain.",
    },
    {
      question: "What is the domain of a function?",
      answer:
        "The domain of a function is the set of all possible input values for which the function is defined.",
    },
    {
      question: "Define the term 'range' in the context of functions.",
      answer:
        "The range of a function is the set of all possible output values that the function can produce.",
    },
    {
      question:
        "What does it mean for a function to be 'one-to-one' or injective?",
      answer:
        "A function is one-to-one if each element in the domain is mapped to a unique element in the codomain.",
    },
    {
      question: "Explain the concept of an 'onto' or surjective function.",
      answer:
        "A function is onto if every element in the codomain has at least one pre-image in the domain.",
    },
    {
      question:
        "What is the difference between a 'total' and a 'partial' function?",
      answer:
        "A total function is defined for every element in its domain, while a partial function may not be defined for every element in its domain.",
    },
    {
      question: "Can a function have the same output for different inputs?",
      answer:
        "Yes, a function can have the same output for different inputs; this is known as having 'multiple pre-images.'",
    },
    {
      question: "What is the composition of functions?",
      answer:
        "The composition of two functions, denoted as (f o g)(x), is a new function obtained by applying one function followed by the other.",
    },
    {
      question: "How is the inverse of a function defined?",
      answer:
        "The inverse of a function, denoted as f^(-1), swaps the roles of the domain and codomain, interchanging input and output values.",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [isCreateFlashcardModalOpen, setCreateFlashcardModalOpen] =
    useState(false);
  const [newFlashcardQuestion, setNewFlashcardQuestion] = useState("");
  const [newFlashcardAnswer, setNewFlashcardAnswer] = useState("");

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % flashcardData.length);
    setShowAnswer(false);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion(
      (prev) => (prev - 1 + flashcardData.length) % flashcardData.length
    );
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowAnswer(false);
  };
  //this section is to add questions to the flash card
  const handleOpenCreateFlashcardModal = () => {
    setCreateFlashcardModalOpen(true);
  };

  const handleCloseCreateFlashcardModal = () => {
    setCreateFlashcardModalOpen(false);
    setNewFlashcardQuestion("");
    setNewFlashcardAnswer("");
  };
  // to add question and answer to the list of question of answer
  const handleCreateFlashcard = () => {
    if (newFlashcardQuestion && newFlashcardAnswer) {
      setFlashCardData([
        ...flashcardData,
        {
          question: newFlashcardQuestion,
          answer: newFlashcardAnswer,
        },
      ]);
      handleCloseCreateFlashcardModal();
    }
  };

  //used inbuilt windows speech synthesis to read out questions
  const [speaking, setSpeaking] = useState(false);
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.onstart = () => setSpeaking(true);
      speech.onend = () => setSpeaking(false);
      speechSynthesis.speak(speech);
    }
  };
  //dismounted the speech synthesis as soon as speech stopped to prevent errors
  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window && speaking) {
        speechSynthesis.cancel();
      }
    };
  }, [speaking]);

  //beautification of tabs
  const [selectedTab, setSelectedTab] = useState("Study");
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className={fullscreen ? "fullscreen" : ""}>
      <div className={`text-3xl text-blue-800 mt-4 ${fullscreen && "hidden"}`}>
        Relations and Functions (Mathematics)
      </div>

      <div className="w-100vw flex flex-col justify-center items-center py-8 gap-8">
        <div className={`flex text-gray-600 gap-8 ${fullscreen && "hidden"}`}>
          <div
            className={`cursor-pointer px-2 py-1 text-lg ${
              selectedTab === "Study" ? "selectedTab" : ""
            }`}
            onClick={() => handleTabClick("Study")}
          >
            &nbsp;Study&nbsp;
          </div>
          <div
            className={`cursor-pointer px-2 py-1 text-lg ${
              selectedTab === "Quiz" ? "selectedTab" : ""
            }`}
            onClick={() => handleTabClick("Quiz")}
          >
            &nbsp;Quiz&nbsp;
          </div>
          <div
            className={`cursor-pointer px-2 py-1 text-lg ${
              selectedTab === "Test" ? "selectedTab" : ""
            }`}
            onClick={() => handleTabClick("Test")}
          >
            &nbsp;Test&nbsp;
          </div>
          <div
            className={`cursor-pointer px-2 py-1 text-lg ${
              selectedTab === "Game" ? "selectedTab" : ""
            }`}
            onClick={() => handleTabClick("Game")}
          >
            &nbsp;Game&nbsp;
          </div>
          <div
            className={`cursor-pointer px-2 py-1 text-lg ${
              selectedTab === "Others" ? "selectedTab" : ""
            }`}
            onClick={() => handleTabClick("Others")}
          >
            &nbsp;Others&nbsp;
          </div>
        </div>
        <div className="w-[45%] px-16 text-white text-2xl text-center bg-gradient-to-tr from-[#489af8] to-[#021682] h-[45vh] rounded-2xl cursor-pointer flex justify-center items-center">
          <div
            className="absolute right-[32%] top-[44%] z-10"
            onClick={() => {
              speakText(
                showAnswer
                  ? flashcardData[currentQuestion].answer
                  : flashcardData[currentQuestion].question
              );
            }}
          >
            <i className={`ri-volume-${speaking ? "" : "down-line"}`}></i>
          </div>
          <div
            className="absolute left-[32%] top-[44%] z-10"
            onClick={handleToggleAnswer}
          >
            <i className="ri-lightbulb-line"></i>
          </div>
          <div>
            {showAnswer
              ? flashcardData[currentQuestion].answer
              : flashcardData[currentQuestion].question}
          </div>
        </div>
        <div>
          <div className="flex gap-16 text-2xl items-center">
            <i
              className="ri-restart-line cursor-pointer"
              onClick={handleRestart}
            ></i>
            <div className="flex gap-4 items-center text-xl">
              <button
                className="bg-gradient-to-t from-[#253bb5] to-[#021682] text-white font-bold pb-1 px-2.5 rounded-full text-xl"
                onClick={handlePrevQuestion}
              >
                {"<"}
              </button>
              {currentQuestion + 1}/{flashcardData.length}
              <button
                className="bg-gradient-to-t from-[#253bb5] to-[#021682] text-white font-bold px-2.5 pb-1 rounded-full text-xl"
                onClick={handleNextQuestion}
              >
                {">"}
              </button>
            </div>
            <i
              className="ri-fullscreen-line cursor-pointer"
              onClick={() => setFullscreen(!fullscreen)}
            ></i>
          </div>
        </div>
      </div>

      {isCreateFlashcardModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Create Flashcard</h2>
            <label className="block mb-2">Question:</label>
            <input
              type="text"
              value={newFlashcardQuestion}
              onChange={(e) => setNewFlashcardQuestion(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <label className="block mb-2">Answer:</label>
            <input
              type="text"
              value={newFlashcardAnswer}
              onChange={(e) => setNewFlashcardAnswer(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleCreateFlashcard}
                className="bg-blue-700 text-white px-4 py-2 rounded"
              >
                Create
              </button>
              <button
                onClick={handleCloseCreateFlashcardModal}
                className="ml-2 text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-full flex justify-between items-center text-2xl ${
          fullscreen ? "hidden" : ""
        }`}
      >
        <img src={circleLogo} className="scale-75 -mx-12" />
        <div
          className="flex gap-4 text-[#021682] cursor-pointer"
          onClick={handleOpenCreateFlashcardModal}
        >
          <button
            className="bg-gradient-to-t from-[#253bb5] to-[#021682] text-white font-bold px-3 pb-2 rounded-full h-fit"
            onClick={handleNextQuestion}
          >
            +
          </button>
          Create Flashcard
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
