import React, { useEffect, useState } from "react";
import axios from "axios";
import { Database, Code, Layers } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import dataTypesImage from "../../../assets/datatype/Picture1.png";

const iconMap = {
  Database: (
    <Database className="text-purple-600 dark:text-purple-300" size={24} />
  ),
  Layers: <Layers className="text-purple-600 dark:text-purple-300" size={24} />,
  Code: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
};

const DataType = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/DataType")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Data Types
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
              {iconMap[card.icon]}
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

            {card.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {card.description}
              </p>
            )}

            {card.points && card.points.length > 0 && (
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

            {card.image === "datatype" && (
              <div className="mt-6 flex justify-center">
                <img
                  src={dataTypesImage}
                  alt="Types of Data Types"
                  className="w-full max-w-3xl rounded-xl shadow-md"
                />
              </div>
            )}

            {card.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                  
                  <thead>
                    <tr className="bg-gray-700 text-white text-left">
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Data Type
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Size
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Range
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Wrapper Class
                      </th>
                      <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                        Default Value
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
                          {row.datatype}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.size}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.range}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.wrapper}
                        </td>
                        <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                          {row.default}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {card.code && (
              <pre className="overflow-x-auto text-sm font-mono mt-4">
                {card.code}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataType;