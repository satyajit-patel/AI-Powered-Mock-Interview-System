import React from 'react';

const ResultPanel = ({ result }) => {
  if (result.error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <h3 className="text-lg font-semibold text-red-700 mb-2">Error</h3>
        <p className="text-red-600">{result.message}</p>
      </div>
    );
  }

  const { executionResult, aiReview } = result;

  return (
    <div className="space-y-6">
      <div className={`p-4 rounded-md ${
        executionResult.status === 'Accepted' 
          ? 'bg-green-50' 
          : 'bg-red-50'
      }`}>
        <h3 className={`text-lg font-semibold mb-2 ${
          executionResult.status === 'Accepted' 
            ? 'text-green-700' 
            : 'text-red-700'
        }`}>
          Execution Result: {executionResult.status}
        </h3>
        
        {executionResult.stdout && (
          <div className="mb-4">
            <h4 className="font-medium mb-1">Output:</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              {executionResult.stdout}
            </pre>
          </div>
        )}
        
        {executionResult.stderr && (
          <div className="mb-4">
            <h4 className="font-medium mb-1">Errors:</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto text-red-600">
              {executionResult.stderr}
            </pre>
          </div>
        )}
        
        {executionResult.compile_output && (
          <div className="mb-4">
            <h4 className="font-medium mb-1">Compilation Output:</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              {executionResult.compile_output}
            </pre>
          </div>
        )}
        
        {executionResult.time && (
          <p className="text-sm">Execution Time: {executionResult.time}s</p>
        )}
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-md">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">AI Code Review</h3>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Feedback:</h4>
          <p className="text-gray-700">{aiReview.feedback}</p>
        </div>
        
        {aiReview.suggestions && aiReview.suggestions.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium mb-2">Suggestions for Improvement:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {aiReview.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-700">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
        
        {aiReview.improvedSolution && (
          <div className="mb-4">
            <h4 className="font-medium mb-2">Improved Solution:</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              {aiReview.improvedSolution}
            </pre>
          </div>
        )}
        
        {aiReview.explanation && (
          <div>
            <h4 className="font-medium mb-2">Explanation:</h4>
            <p className="text-gray-700">{aiReview.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPanel;