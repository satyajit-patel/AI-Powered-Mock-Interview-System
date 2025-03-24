import React, { useEffect } from "react";
import { Vortex } from "./vortex";
import { Link } from "react-router-dom";
import axios from "axios";

export function VortexDemoSecond() {
    useEffect(() => {
        const wakeUpSidd = async () => {
          const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
          const response = await axios.get(`${VITE_BACKEND_URL}/ping`);
          console.log(response.data);
        }
        wakeUpSidd();
      }, []);

  return (
    <div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            A full-stack application that provides a LeetCode-style coding interview experience with AI-powered code review and feedback.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link to="/joblist">
            <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Explore now
            </button>
            </Link>
        </div>
      </Vortex>
    </div>
  );
}
