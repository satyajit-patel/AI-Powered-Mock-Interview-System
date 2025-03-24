// backend/utils/seed.js
const mongoose = require('mongoose');
require('dotenv').config();
const Job = require('../models/Job');

// Sample data
const jobsData = [
    {
        "title": "Senior Frontend Developer",
        "company": "TechInnovate",
        "description": "We are looking for a Senior Frontend Developer to join our team. You will be working on developing user interfaces for our web applications, ensuring a great user experience.",
        "location": "Remote",
        "skills": ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Redux"],
        "codingQuestions": [
          {
            "title": "String Reversal",
            "description": "Write a function that reverses a string. The input string is given as an array of characters.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.\n\nExample:\n- Input: ['h','e','l','l','o']\n- Output: ['o','l','l','e','h']",
            "difficulty": "Easy",
            "sampleInput": "['h','e','l','l','o']",
            "sampleOutput": "['o','l','l','e','h']",
            "testCases": [
              {
                "input": "['h','e','l','l','o']",
                "output": "['o','l','l','e','h']"
              },
              {
                "input": "['H','a','n','n','a','h']",
                "output": "['h','a','n','n','a','H']"
              }
            ]
          },
          {
            "title": "Two Sum",
            "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nExample:\n- Input: nums = [2,7,11,15], target = 9\n- Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])",
            "difficulty": "Medium",
            "sampleInput": "nums = [2,7,11,15], target = 9",
            "sampleOutput": "[0,1]",
            "testCases": [
              {
                "input": "nums = [2,7,11,15], target = 9",
                "output": "[0,1]"
              },
              {
                "input": "nums = [3,2,4], target = 6",
                "output": "[1,2]"
              }
            ]
          }
        ]
      },
      {
        "title": "Backend Developer",
        "company": "DataTech Solutions",
        "description": "We are seeking a talented Backend Developer to design, implement and maintain server-side applications. The ideal candidate will have experience with Node.js, Express, and MongoDB.",
        "location": "New York, NY",
        "skills": ["Node.js", "Express", "MongoDB", "RESTful APIs", "Docker"],
        "codingQuestions": [
          {
            "title": "Valid Anagram",
            "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\nExample 1:\n- Input: s = \"anagram\", t = \"nagaram\"\n- Output: true\n\nExample 2:\n- Input: s = \"rat\", t = \"car\"\n- Output: false",
            "difficulty": "Easy",
            "sampleInput": "s = \"anagram\", t = \"nagaram\"",
            "sampleOutput": "true",
            "testCases": [
              {
                "input": "s = \"anagram\", t = \"nagaram\"",
                "output": "true"
              },
              {
                "input": "s = \"rat\", t = \"car\"",
                "output": "false"
              }
            ]
          },
          {
            "title": "Group Anagrams",
            "description": "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\nExample:\n- Input: strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\n- Output: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
            "difficulty": "Medium",
            "sampleInput": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
            "sampleOutput": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
            "testCases": [
              {
                "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
                "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
              },
              {
                "input": "[\"\"]",
                "output": "[[\"\"]]"
              }
            ]
          }
        ]
      },
      {
        "title": "Full Stack Developer",
        "company": "WebSolutions Inc",
        "description": "We're looking for a Full Stack Developer who can work with both frontend and backend technologies. You'll be building scalable web applications and implementing new features.",
        "location": "Austin, TX",
        "skills": ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "Git"],
        "codingQuestions": [
          {
            "title": "Valid Parentheses",
            "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\nExample 1:\n- Input: s = \"()\"\n- Output: true\n\nExample 2:\n- Input: s = \"()[]{}\"\n- Output: true\n\nExample 3:\n- Input: s = \"(]\"\n- Output: false",
            "difficulty": "Easy",
            "sampleInput": "s = \"()[]{}\"",
            "sampleOutput": "true",
            "testCases": [
              {
                "input": "s = \"()[]{}\"",
                "output": "true"
              },
              {
                "input": "s = \"(]\"",
                "output": "false"
              }
            ]
          },
          {
            "title": "Container With Most Water",
            "description": "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.\n\nNote: You may not slant the container.\n\nExample:\n- Input: height = [1,8,6,2,5,4,8,3,7]\n- Output: 49\n- Explanation: The container with the most water is formed by the vertical lines at positions 1 and 8, with heights 8 and 7. The area of this container is 49.",
            "difficulty": "Medium",
            "sampleInput": "height = [1,8,6,2,5,4,8,3,7]",
            "sampleOutput": "49",
            "testCases": [
              {
                "input": "height = [1,8,6,2,5,4,8,3,7]",
                "output": "49"
              },
              {
                "input": "height = [1,1]",
                "output": "1"
              }
            ]
          }
        ]
      },
      {
        "title": "DevOps Engineer",
        "company": "CloudNative Systems",
        "description": "We are seeking a skilled DevOps Engineer to help us improve our continuous integration and deployment processes. Experience with cloud technologies and automation is crucial.",
        "location": "San Francisco, CA",
        "skills": ["Kubernetes", "Docker", "AWS", "CI/CD", "Terraform", "Jenkins"],
        "codingQuestions": [
          {
            "title": "Palindrome Number",
            "description": "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.\n\nExample 1:\n- Input: x = 121\n- Output: true\n\nExample 2:\n- Input: x = -121\n- Output: false\n\nExample 3:\n- Input: x = 10\n- Output: false",
            "difficulty": "Easy",
            "sampleInput": "x = 121",
            "sampleOutput": "true",
            "testCases": [
              {
                "input": "x = 121",
                "output": "true"
              },
              {
                "input": "x = -121",
                "output": "false"
              },
              {
                "input": "x = 10",
                "output": "false"
              }
            ]
          },
          {
            "title": "Merge Sorted Array",
            "description": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.\n\nMerge nums1 and nums2 into a single array sorted in non-decreasing order.\n\nThe final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.\n\nExample:\n- Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n- Output: [1,2,2,3,5,6]",
            "difficulty": "Easy",
            "sampleInput": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
            "sampleOutput": "[1,2,2,3,5,6]",
            "testCases": [
              {
                "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                "output": "[1,2,2,3,5,6]"
              },
              {
                "input": "nums1 = [1], m = 1, nums2 = [], n = 0",
                "output": "[1]"
              }
            ]
          }
        ]
      },
      {
        "title": "Machine Learning Engineer",
        "company": "AI Innovations",
        "description": "We are looking for a Machine Learning Engineer to develop and implement advanced machine learning models. Strong background in Python, deep learning, and data analysis is required.",
        "location": "Boston, MA",
        "skills": ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Data Analysis"],
        "codingQuestions": [
          {
            "title": "Reverse Integer",
            "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.\n\nExample 1:\n- Input: x = 123\n- Output: 321\n\nExample 2:\n- Input: x = -123\n- Output: -321\n\nExample 3:\n- Input: x = 120\n- Output: 21",
            "difficulty": "Easy",
            "sampleInput": "x = 123",
            "sampleOutput": "321",
            "testCases": [
              {
                "input": "x = 123",
                "output": "321"
              },
              {
                "input": "x = -123",
                "output": "-321"
              },
              {
                "input": "x = 120",
                "output": "21"
              }
            ]
          },
          {
            "title": "First Unique Character in a String",
            "description": "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.\n\nExample 1:\n- Input: s = \"leetcode\"\n- Output: 0\n\nExample 2:\n- Input: s = \"loveleetcode\"\n- Output: 2\n\nExample 3:\n- Input: s = \"aabb\"\n- Output: -1",
            "difficulty": "Easy",
            "sampleInput": "s = \"leetcode\"",
            "sampleOutput": "0",
            "testCases": [
              {
                "input": "s = \"leetcode\"",
                "output": "0"
              },
              {
                "input": "s = \"loveleetcode\"",
                "output": "2"
              },
              {
                "input": "s = \"aabb\"",
                "output": "-1"
              }
            ]
          }
        ]
      }
];

// Connect to MongoDB
mongoose.connect(process.env.mongoURI)
.then(async () => {
  console.log('MongoDB Connected...');
  
  try {
    
    // Clear existing data
    await Job.deleteMany({});
    console.log('All existing jobs deleted');
    
    // Insert new data
    const jobs = await Job.insertMany(jobsData);
    console.log(`${jobs.length} jobs inserted into the database`);
    
    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log('MongoDB Disconnected');
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});