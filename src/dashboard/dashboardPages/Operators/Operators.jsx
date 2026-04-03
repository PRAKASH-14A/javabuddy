import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calculator, RefreshCcw, GitBranch } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const iconMap = {
  Calculator: <Calculator className="text-purple-600" size={24} />,
  RefreshCcw: <RefreshCcw className="text-purple-600" size={24} />,
  GitBranch: <GitBranch className="text-purple-600" size={24} />,
};

const Operators = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/operators")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Operators
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600"
          >
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {card.description}
            </p>

            <ul className="space-y-3 mb-6">
              {card.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-gray-900 dark:text-white">
                  <TiInputChecked className="text-green-500 mt-1" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                {card.code}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operators;