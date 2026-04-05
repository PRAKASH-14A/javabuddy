import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListChecks } from "lucide-react";

const ICONS = {
  compare: (
    <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />
  ),
};

const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
  </div>
);

const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

const StringBuilder = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/stringBuilderComparison")
      .then((res) => setData(res.data))
      .catch((err) => {
        setError("Failed to load data");
        console.error(err);
      });
  }, []);

  if (error)
    return <p className="text-center mt-10 text-red-600 font-semibold">{error}</p>;
  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={data.title} />

      <ContentCard icon={ICONS.compare} title="What is StringBuilder?">
        <p className="text-gray-800 dark:text-gray-300">
          <strong>StringBuilder:</strong> {data.definition}
        </p>
      </ContentCard>

      <br />

      <ContentCard icon={ICONS.compare} title="StringBuffer Vs stringBuilder">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-purple-900 dark:text-white">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">StringBuffer</th>
                <th className="p-3">StringBuilder</th>
              </tr>
            </thead>
            <tbody>
              {data.comparison.map((row, index) => (
                <tr key={index} className="border-t text-white">
                  <td className="p-3 font-semibold">{row.feature}</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    {row.stringBuffer}
                  </td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    {row.stringBuilder}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentCard>
    </div>
  );
};

export default StringBuilder;