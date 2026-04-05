import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Code,
  Layers,
  Repeat,
  ArrowRightCircle,
  GitCompare,
} from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import methodImg from "../../../assets/methods/Picture1.png";

// Icon map
const iconMap = {
  Code: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
  Layers: <Layers className="text-blue-600 dark:text-blue-300" size={24} />,
  Repeat: <Repeat className="text-green-600 dark:text-green-300" size={24} />,
  ArrowRightCircle: (
    <ArrowRightCircle className="text-orange-600 dark:text-orange-300" size={24} />
  ),
  GitCompare: (
    <GitCompare className="text-pink-600 dark:text-pink-300" size={24} />
  ),
};

const Method = () => {
  const [methodsData, setMethodsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/methods")
      .then((res) => setMethodsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Methods
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {methodsData.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            {card.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-5 text-base leading-relaxed">
                {card.description}
              </p>
            )}

            {card.points && (
              <ul className="space-y-3">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                  >
                    <TiInputChecked className="text-green-500 mt-1" size={20} />
                    <span className="whitespace-pre-line">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-6 whitespace-pre-wrap">
                {card.code}
              </pre>
            )}

            {card.image && card.image === "methodImg" && (
              <div className="mt-6">
                <img
                  src={methodImg}
                  alt="Method"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            )}

            {card.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-300 dark:border-gray-600 text-left">
                  <thead className="bg-purple-100 dark:bg-gray-700">
                    <tr>
                      {card.table.headers.map((head, idx) => (
                        <th key={idx} className="p-3 border text-white">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 text-white">
                    {card.table.rows.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, cidx) => (
                          <td key={cidx} className="p-3 border">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Method;