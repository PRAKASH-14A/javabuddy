import React from "react";
import { Layers } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const Features = () => {
  const features = [
    "Methods are reusable code blocks that enhance modularity and maintainability.",
    "Supports abstraction in object-oriented programming.",
    "Methods can either return values (like an integer, string, or object) or perform operations without returning anything (such as printing a message).",
    "Methods can accept parameters, allowing for dynamic behaviour based on inputs.",
  ];

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Features of Methods
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300">
        
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-purple-600 dark:text-purple-300" size={26} />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Key Features
          </h2>
        </div>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
            >
              <TiInputChecked className="text-green-500 mt-1" size={20} />
              <span className="text-base leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;