import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CodeEditor from './CodeEditor';
import QuestionPanel from './QuestionPanel';
import ResultPanel from './ResultPanel';

const MockInterview = () => {
  const { jobId, questionId } = useParams();
  const [job, setJob] = useState(null);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  
  // Temporary user ID for demo purposes
  const userId = '6405f1a5c3e4d5b2a1c7f8e9';
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobRes, questionRes] = await Promise.all([
          axios.get(`${VITE_BACKEND_URL}/api/jobs/${jobId}`),
          axios.get(`${VITE_BACKEND_URL}/api/jobs/${jobId}/questions/${questionId}`)
        ]);
        
        setJob(jobRes.data);
        setQuestion(questionRes.data);
        
        // Set initial code based on language
        setCode(getInitialCode(language, questionRes.data.title));
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching interview data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [jobId, questionId]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(getInitialCode(newLanguage, question?.title));
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setResult(null);
    
    try {
        const response = await axios.post(`${VITE_BACKEND_URL}/api/submissions`, {
          userId,
          jobId,
          questionId,
          code,
          language
        });
        
        setResult(response.data);
      } catch (err) {
        console.error('Error submitting code:', err);
        setResult({
          error: true,
          message: 'An error occurred while submitting your code. Please try again.'
        });
      } finally {
        setSubmitting(false);
      }
    };
  
  const getInitialCode = (lang, title) => {
    const functionName = title ? 
      title.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_') : 
      'solve_problem';
      
    switch (lang) {
      case 'python':
        return `def ${functionName}(input_data):\n    # Write your solution here\n    pass\n\n# Example usage\nif __name__ == "__main__":\n    # Test your function\n    print(${functionName}(input_data))`;
      
      case 'javascript':
        return `function ${functionName}(inputData) {\n    // Write your solution here\n    \n}\n\n// Example usage\nconsole.log(${functionName}(inputData));`;
      
      case 'java':
        return `import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Test your solution\n        System.out.println(${functionName}(null));\n    }\n    \n    public static Object ${functionName}(Object inputData) {\n        // Write your solution here\n        return null;\n    }\n}`;
      
      case 'cpp':
        return `#include <iostream>\n#include <vector>\n#include <string>\n\n// Write your solution here\nreturn_type ${functionName}(parameters) {\n    // Implementation\n    \n}\n\nint main() {\n    // Test your solution\n    \n    return 0;\n}`;
      
      default:
        return '// Write your solution here';
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-semibold">Loading interview...</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-indigo-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to={`/jobs/${jobId}`} className="text-white hover:text-indigo-200">
              &larr; Back to Job
            </Link>
          </div>
          <div className="text-lg font-semibold">{job?.title} - Mock Interview</div>
          <div className="flex items-center space-x-2">
            <label htmlFor="language" className="text-sm">Language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-indigo-800 text-white rounded px-2 py-1 text-sm border border-indigo-500"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/2 overflow-auto border-r">
          <QuestionPanel question={question} />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 overflow-auto">
            <CodeEditor 
              code={code} 
              language={language} 
              onChange={handleCodeChange} 
            />
          </div>
          <div className="p-4 border-t flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`px-6 py-2 rounded text-white font-medium ${
                submitting 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {submitting ? 'Submitting...' : 'Submit Solution'}
            </button>
          </div>
        </div>
      </div>
      
      {result && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg shadow-xl w-3/4 max-h-3/4 flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Submission Result</h2>
              <button 
                onClick={() => setResult(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <ResultPanel result={result} />
            </div>
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setResult(null)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterview;