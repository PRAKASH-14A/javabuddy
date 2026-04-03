import React, { useEffect, useState } from "react";
import axios from "axios";
import { Code, Layers } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const iconMap = {
  Layers: <Layers className="text-purple-600 dark:text-purple-300" size={24} />,
  Code: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
};

const TypeCasting = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/typecasting")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Type Casting
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        
        {data.map((card) => (
          <div
            key={card.id}
            className={`w-full rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 transition duration-300
            ${
              card.code
                ? "bg-gray-900 text-gray-100"
                : "bg-white dark:bg-gray-800 hover:shadow-xl"
            }`}
          >
            
            <div className="flex items-center gap-3 mb-4">
              {card.icon && iconMap[card.icon]}
              <h2
                className={`text-2xl font-semibold ${
                  card.code
                    ? "text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {card.title}
              </h2>
            </div>

            {card.points && (
              <ul className="space-y-3">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                  >
                    <TiInputChecked
                      className="text-green-500 mt-1"
                      size={20}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.code && (
              <pre className="overflow-x-auto text-sm font-mono mt-4">
                {card.code}
              </pre>
            )}

            {card.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                  
                  <thead>
                    <tr className="bg-gray-700 text-white text-left">
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Type
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Also Called
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Who Does It?
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Data Loss?
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Example
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-800 dark:text-gray-200">
                    {card.table.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.type}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.called}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.who}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.loss}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.example}
                        </td>
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

export default TypeCasting;