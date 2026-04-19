import React, { useEffect, useState } from "react";

import { CheckCircle, RefreshCw } from "lucide-react";

import img2 from "../../../assets/WrapperClass/img2.png";
import useContent from "@/hooks/useContent";

const ICONS = {
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
  convert: <RefreshCw className="text-indigo-600 dark:text-indigo-300" size={24} />,
};

const IMAGES = {
  img2: img2,
};

const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
      {title}
    </h1>
  </div>
);

const PointItem = ({ point }) => {
  if (typeof point === "object") {
    const label =
      point.type === "syntax"
        ? "Syntax:"
        : point.type === "example"
        ? "Example:"
        : "Code:";

    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-start gap-3 ">
          {ICONS.check}
          <span className="font-medium text-white">{label}</span>
        </div>
        <div className="ml-8 ">
          <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono">
            <code>{point.code}</code>
          </pre>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3">
      {ICONS.check}
      <span>{point}</span>
    </li>
  );
};

const ContentCard = ({ section }) => (
  <div className="w-full bg-white text-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    
    <div className="flex flex-col lg:flex-row gap-6">

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          {ICONS[section.icon]}
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white ">
            {section.title}
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 ">
          {section.description}
        </p>

        <ul className="space-y-3">
          {section.keyPoints.map((point, i) => (
            <PointItem key={i} point={point} />
          ))}
        </ul>
      </div>

      {section.image && (
        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={IMAGES[section.image]}
            alt={section.title}
            className="rounded-xl shadow-md max-w-full h-auto"
          />
        </div>
      )}

    </div>
  </div>
);

const AutoboxingUnboxing = () => {
  const { data, loading, error } = useContent("autoboxing");

  if (!data)
    return <p className="text-center mt-10">Loading...</p>;

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

export default AutoboxingUnboxing;