import React from 'react';
import ReactMarkdown from 'react-markdown';

const QuestionPanel = ({ question }) => {
  if (!question) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Question not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
        <div className="flex items-center">
          <span className={`inline-block px-2 py-1 text-xs rounded ${
            question.difficulty === 'Easy' 
              ? 'bg-green-100 text-green-800' 
              : question.difficulty === 'Medium'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {question.difficulty}
          </span>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <ReactMarkdown>{question.description}</ReactMarkdown>
      </div>
      
      {(question.sampleInput || question.sampleOutput) && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Examples:</h3>
          
          {question.sampleInput && (
            <div className="mb-4">
              <h4 className="text-md font-medium mb-1">Input:</h4>
              <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                {question.sampleInput}
              </pre>
            </div>
          )}
          
          {question.sampleOutput && (
            <div>
              <h4 className="text-md font-medium mb-1">Output:</h4>
              <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                {question.sampleOutput}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;