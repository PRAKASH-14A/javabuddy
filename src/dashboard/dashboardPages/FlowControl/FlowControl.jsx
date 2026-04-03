import React, { useEffect, useState } from "react";
import axios from "axios";
import { GitBranch, Repeat, ArrowRightCircle } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const iconMap = {
  GitBranch: <GitBranch className="text-purple-600" size={24} />,
  Repeat: <Repeat className="text-blue-600" size={24} />,
  ArrowRightCircle: (
    <ArrowRightCircle className="text-green-600" size={24} />
  ),
};

const FlowControl = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/flowControl")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Flow Control
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600"
          >
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            {card.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {card.description}
              </p>
            )}

            {card.points && (
              <ul className="space-y-2 mb-6">
                {card.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <TiInputChecked
                      className="text-green-500 mt-1"
                      size={20}
                    />
                    <span className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                {card.code}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowControl;