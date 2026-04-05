import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coffee, CheckCircle } from "lucide-react";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />
};

const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">{title}</h1>
  </div>
);

const PointItem = ({ point }) => {
  if (typeof point === "object" && point.code) {
    return (
      <div className="ml-4 mb-4">
        <div className="flex items-center gap-2 mb-1">
          {ICONS.check}
          <span className="font-medium">Example:</span>
        </div>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
          <code>{point.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
      {ICONS.check}
      <span>{point}</span>
    </li>
  );
};

const ContentCard = ({ section }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {ICONS[section.icon]}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6">{section.description}</p>

    {section.type === "table" ? (
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden table-fixed">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
              {section.table.headers.map((header, idx) => (
                <th key={idx} className="w-1/2 px-6 py-4 text-center font-bold text-lg tracking-wide">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`bg-gray-700 text-white ${rowIdx % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}`}
              >
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="w-1/2 px-6 py-4 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 align-top leading-relaxed text-center">
                    <div className="text-sm lg:text-base">{cell}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <ul className="space-y-3 ml-2">
        {section.keyPoints?.map((point, index) => (
          <PointItem key={index} point={point} />
        ))}
      </ul>
    )}
  </div>
);

const StringBuffer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/stringBuffer");
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-lg font-medium text-red-600">{error}</p>;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={data.header.title} />
      <div className="flex flex-col gap-10">
        {data.sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default StringBuffer;