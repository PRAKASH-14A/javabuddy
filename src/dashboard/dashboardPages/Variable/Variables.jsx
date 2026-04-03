import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wrench, ListChecks, Copy, Repeat, Link } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";

const iconMap = {
  Wrench: <Wrench className="text-purple-600" size={24} />,
  ListChecks: <ListChecks className="text-blue-600" size={24} />,
  Copy: <Copy className="text-green-600" size={24} />,
  Repeat: <Repeat className="text-orange-600" size={24} />,
  Link: <Link className="text-red-500" size={24} />,
};

const Variables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/variables")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const tableData = data.find((item) => item.table);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Variables
        </h1>
      </div>

      <div className="flex flex-col gap-8">

        {data
          .filter((card) => !card.table)
          .map((card) => (
            <div
              key={card.id}
              className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600"
            >
              
              <div className="flex items-center gap-3 mb-4">
                {card.icon && iconMap[card.icon]}
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
                <ul className="space-y-3 mb-6">
                  {card.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-800 dark:text-gray-200"
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
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  {card.code}
                </pre>
              )}
            </div>
          ))}

        {tableData && (
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600">
            
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                📊 Summary Table
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 dark:border-gray-600 text-left text-sm">
                
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Declared In</th>
                    <th className="px-4 py-2 border">Access Method</th>
                    <th className="px-4 py-2 border">Memory Area</th>
                    <th className="px-4 py-2 border">Default Value</th>
                  </tr>
                </thead>

                <tbody className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  {tableData.table.map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 border">{row.type}</td>
                      <td className="px-4 py-2 border">{row.declared}</td>
                      <td className="px-4 py-2 border">{row.access}</td>
                      <td className="px-4 py-2 border">{row.memory}</td>
                      <td
                        className={`px-4 py-2 border ${
                          row.default.includes("❌")
                            ? "text-red-50 font-semibold"
                            : ""
                        }`}
                      >
                        {row.default}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Variables;