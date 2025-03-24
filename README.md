# AI-Powered Mock Interview System

A full-stack application that provides a LeetCode-style coding interview experience with AI-powered code review and feedback.

## find the live link [here](coming soon)
## find the demo video [here](coming soon)

## Features

- Browse job listings
- Take mock interviews related to specific jobs
- Write code in various programming languages
- Submit solutions for automated testing
- Receive AI-powered code review and suggestions

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB for data storage
- LangChain with Groq for AI code review
- Judge0 API for code execution

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Ace Editor for the code editor
- Axios for API requests

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB installed locally or a MongoDB Atlas account
- Groq API key
- Judge0 API key

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Setup your env file:
   ```
   {
     "mongoURI": "your_mongodb_connection_string",
     "groqApiKey": "your_groq_api_key",
     "judge0ApiKey": "your_judge0_api_key",
     "judge0ApiUrl": "https://judge0-ce.p.rapidapi.com"
   }
   ```
4. Seed the database with sample data:
   ```
   node utils/seed.js
   ```

5. Start the backend server:
   ```
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Usage

1. Browse the list of available jobs
2. Select a job to view details
3. Choose a coding question to begin the mock interview
4. Select your preferred programming language
5. Write your solution in the code editor
6. Submit your solution for evaluation
7. Review the execution results and AI feedback

## Development Notes

- The backend API is configured to run on port 3000
- The frontend development server runs on port 5173
- For simplicity, authentication is not implemented in this version

## License

MIT