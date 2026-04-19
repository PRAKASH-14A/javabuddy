import React, { useEffect, useState } from "react";

import { Coffee, CheckCircle } from "lucide-react";

import hierarchyImage from "../../../assets/WrapperClass/WrapperClass1.jpg";
import useContent from "@/hooks/useContent";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
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

const PointItem = ({ point }) => (
  <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
    {ICONS.check}
    <span>{point}</span>
  </li>
);

const SimplePointsList = ({ points }) => (
  <ul className="space-y-3">
    {points.map((point, index) => (
      <PointItem key={index} point={point} />
    ))}
  </ul>
);

const ContentCard = ({ section }) => {
  const isHierarchySection = section.id === 3;

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {ICONS[section.icon]}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {section.title}
        </h2>
      </div>

      {isHierarchySection && (
        <div className="mb-6">
          <img
            src={hierarchyImage}
            alt={section.title}
            className="w-[50%] h-auto mx-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
        {section.description}
      </p>

      <SimplePointsList points={section.keyPoints} />
    </div>
  );
};

const WrapperClass = () => {
  const { data, loading, error } = useContent("wrapperClass");

  if (error)
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">{error}</p>
    );
  if (!data) return <p className="text-center mt-10">Loading...</p>;

  const { header, sections } = data;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={header.title} />
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default WrapperClass;