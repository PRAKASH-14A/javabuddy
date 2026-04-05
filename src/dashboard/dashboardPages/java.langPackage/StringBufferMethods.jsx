import React, { useEffect, useState } from "react";
import axios from "axios";
import { Code, ClipboardList } from "lucide-react";

const ICONS = {
  method: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
  header: (
    <ClipboardList className="text-purple-600 dark:text-purple-300" size={24} />
  ),
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
    )}
  </div>
);

const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1 mb-10">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

const StringBufferMethods = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/stringBufferMethodsData")
      .then((response) => setData(response.data))
      .catch((err) => {
        setError("Failed to load data");
        console.error(err);
      });
  }, []);

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={data.header.title} subtitle={data.header.subtitle} />

      <ContentCard icon={ICONS.header} title="StringBuffer Constructors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-indigo-900 dark:text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Constructor</th>
                <th className="p-3">Description</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              {data.constructors.map((ctor) => (
                <tr key={ctor.id} className="border-t text-white">
                  <td className="p-2">{ctor.id}</td>
                  <td className="p-2 font-medium">{ctor.constructor}</td>
                  <td className="p-2">{ctor.description}</td>
                  <td className="p-2 font-mono text-sm whitespace-pre-line text-gray-700 dark:text-gray-300">
                    {ctor.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentCard>

      <ContentCard icon={ICONS.method} title="StringBuffer Methods">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-purple-900 dark:text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Method</th>
                <th className="p-3">Description</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              {data.methods.map((method) => (
                <tr key={method.id} className="border-t text-white">
                  <td className="p-2">{method.id}</td>
                  <td className="p-2 font-medium">{method.name}</td>
                  <td className="p-2">{method.description}</td>
                  <td className="p-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    {method.example}
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

export default StringBufferMethods;