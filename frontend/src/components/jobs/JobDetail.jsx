import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchJobAndQuestions = async () => {
      try {
        const [jobRes, questionsRes] = await Promise.all([
          axios.get(`${VITE_BACKEND_URL}/api/jobs/${jobId}`),
          axios.get(`${VITE_BACKEND_URL}/api/jobs/${jobId}/questions`)
        ]);
        
        setJob(jobRes.data);
        setQuestions(questionsRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching job details:', err);
        setLoading(false);
      }
    };

    fetchJobAndQuestions();
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-semibold">Loading job details...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-red-600">Job not found</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
          Back to Job List
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="text-indigo-600 hover:underline mb-4 inline-block">
        &larr; Back to Job List
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{job.company}</h2>
        <p className="text-gray-600 mb-2">Location: {job.location}</p>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Skills Required:</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills && job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Description:</h3>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Mock Interview</h2>
        <p className="mb-6 text-gray-700">
          Practice for this job by taking a coding interview. Select a question below to start.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Available Coding Questions:</h3>
          
          {questions.length === 0 ? (
            <p className="text-gray-600">No coding questions available for this job.</p>
          ) : (
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question._id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium">{question.title}</h4>
                      <span className={`inline-block px-2 py-1 text-xs rounded mt-1 ${
                        question.difficulty === 'Easy' 
                          ? 'bg-green-100 text-green-800' 
                          : question.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                    <Link
                      to={`/jobs/${jobId}/interview/${question._id}`}
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                    >
                      Start Interview
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;