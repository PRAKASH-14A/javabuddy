import React, { useEffect, useState } from "react";

import { Code, ListChecks } from "lucide-react";
import img from "../../../assets/String/method1.jpg";
import useContent from "@/hooks/useContent";

const ICONS = {
  method: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
  constructor: <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />,
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">{title}</h1>
    {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
  </div>
);

const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div>{children}</div>
  </div>
);

const StringMethods = () => {
  const { data, loading, error } = useContent("stringMethods");

  if (loading) return <p className="text-center mt-10 text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-lg font-medium text-red-600">{error}</p>;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={data.header.title} subtitle={data.header.subtitle} />

      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <img
            src={img}
            alt="String Methods in Java"
            className="rounded-xl shadow-md w-full max-w-2xl h-auto object-contain"
          />
        </div>

        <ContentCard icon={ICONS.method} title="String Methods">
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-purple-300">
              <thead className="bg-purple-300 dark:bg-purple-900 text-indigo-900 dark:text-white">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Example</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {data.methods.map((method) => (
                  <tr key={method.id} className="border-t text-white">
                    <td className="p-2 text-white">{method.id}</td>
                    <td className="p-2 font-medium text-white">{method.name}</td>
                    <td className="p-2 font-mono text-green-700 dark:text-green-400">{method.usage}</td>
                    <td className="p-2 text-white">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>

        <ContentCard icon={ICONS.constructor} title="Constructors of String Class">
          <ul className="list-disc pl-6 space-y-3 text-gray-800 dark:text-gray-200">
            {data.constructors.map((ctor, idx) => (
              <li key={idx}>
                <strong>{ctor.type}: </strong>
                <code className="bg-black text-green-400 p-1 rounded">{ctor.example}</code>
              </li>
            ))}
          </ul>
        </ContentCard>
      </div>
    </div>
  );
};

export default StringMethods;