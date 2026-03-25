import React, { useEffect, useState } from "react";
import axios from "axios";
import { Type, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const iconMap = {
  Type: <Type className="text-purple-600 dark:text-purple-300" size={24} />,
  BookOpen: <BookOpen className="text-purple-600 dark:text-purple-300" size={24} />,
  CheckCircle: <CheckCircle className="text-green-600 dark:text-green-400" size={24} />,
  XCircle: <XCircle className="text-red-500 dark:text-red-400" size={24} />,
};

const Identifier = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/identifier")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full py-16 px-4">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Identifiers
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            {/* Description */}
            {card.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {card.description}
              </p>
            )}

            {/* Points */}
            {card.points && card.points.length > 0 && (
              <ul className="space-y-3">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                  >
                    <TiInputChecked className="text-green-500 mt-1" size={20} />
                    <span className="font-mono text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Code */}
            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-6 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {card.code}
              </pre>
            )}
          </div>
        ))}

        {/* STATIC TABLE (keep as it is) */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300">
          
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-purple-600 dark:text-purple-300" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Java Naming Conventions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-3 border">Element</th>
                  <th className="px-4 py-3 border">Convention</th>
                  <th className="px-4 py-3 border">Example</th>
                  <th className="px-4 py-3 border">Description</th>
                </tr>
              </thead>

              <tbody className="text-gray-800 dark:text-gray-200">
                <tr>
                  <td className="px-4 py-3 border">Class</td>
                  <td className="px-4 py-3 border">PascalCase</td>
                  <td className="px-4 py-3 border font-mono">StudentInfo</td>
                  <td className="px-4 py-3 border">Capitalize each word</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border">Method</td>
                  <td className="px-4 py-3 border">camelCase</td>
                  <td className="px-4 py-3 border font-mono">getName()</td>
                  <td className="px-4 py-3 border">Start lowercase</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border">Constant</td>
                  <td className="px-4 py-3 border">UPPER_CASE</td>
                  <td className="px-4 py-3 border font-mono">MAX_VALUE</td>
                  <td className="px-4 py-3 border">All caps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identifier;