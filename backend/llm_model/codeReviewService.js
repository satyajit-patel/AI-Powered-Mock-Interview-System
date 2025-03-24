const { ChatGroq } = require("@langchain/groq");
require("dotenv").config();
const { PromptTemplate } = require("@langchain/core/prompts");

const groq = new ChatGroq({
  apiKey: process.env.groqApiKey,
  model: "llama3-70b-8192",
});

// Define the input variables explicitly
const inputVariables = ["problemDescription", "language", "code"];

const promptTemplate = new PromptTemplate({
  inputVariables,
  template: `
    You are an expert code reviewer assessing a submission for a coding interview problem.

    Problem description:
    {problemDescription}

    The candidate's code ({language}):
    {code}

    Please provide a thorough code review addressing the following:
    1. Correctness: Does the code solve the problem correctly?
    2. Efficiency: Analyze the time and space complexity.
    3. Code quality: Assess readability, naming conventions, and overall structure.
    4. Specific improvements: Identify areas that could be improved.
    5. Better solution: If a better solution exists, provide it with an explanation.

    Respond **only** with a valid JSON object, formatted as follows:
    {{
      "feedback": "Overall assessment of the solution",
      "suggestions": ["Suggestion 1", "Suggestion 2"],
      "improvedSolution": "A better implementation of the solution (if applicable)",
      "explanation": "Explanation of why the improved solution is better"
    }}
    Ensure the response is **strictly** valid JSON with no additional text.
  `,
});

exports.reviewCode = async (code, language, problemDescription) => {
  if (!code || !language || !problemDescription) {
    console.error("Missing required parameters: code, language, or problemDescription");
    return {
      feedback: "Invalid input: Missing required fields.",
      suggestions: [],
      improvedSolution: "",
      explanation: ""
    };
  }

  try {
    const prompt = await promptTemplate.format({
      problemDescription,
      language,
      code,
    });

    const response = await groq.invoke(prompt);
    return JSON.parse(response.content);
  } catch (err) {
    console.error("Error in AI code review:", err);
    return {
      feedback: "An error occurred during the code review process.",
      suggestions: [],
      improvedSolution: "",
      explanation: ""
    };
  }
};
