import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coffee, CheckCircle } from "lucide-react";
import img from "../../../assets/Collection/img1.jpg";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const IMAGES = {
  img1: img,
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

const PointItem = ({ point }) => {

  if (typeof point === "object" && point.type === "table") {
    return (
      <li className="flex flex-col gap-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-white border-gray-300 dark:border-gray-600 rounded-lg">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900">
                <th className="border px-4 py-3">Aspect</th>
                <th className="border px-4 py-3">Description</th>
                <th className="border px-4 py-3">Collection</th>
              </tr>
            </thead>
            <tbody>
              {point.data.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-3">{row.aspect}</td>
                  <td className="border px-4 py-3">{row.array}</td>
                  <td className="border px-4 py-3">{row.collection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </li>
    );
  }

  if (typeof point === "object" && point.type === "image") {
    return (
      <li className="flex flex-col items-center gap-4 ">
        <img
          src={IMAGES[point.src]}
          alt={point.alt}
          className="rounded-xl border shadow-lg max-w-full h-auto"
        />
        <p className="text-sm text-gray-500">{point.alt}</p>
      </li>
    );
  }

  if (typeof point === "object" && point.code) {
    const label =
      point.type === "syntax"
        ? "Syntax:"
        : point.type === "example"
        ? "Example:"
        : "Code:";

    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          {ICONS.check}
          <span className="font-medium">{label}</span>
        </div>
        <div className="ml-8">
          <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto">
            <code>{point.code}</code>
          </pre>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3">
      {ICONS.check}
      <span dangerouslySetInnerHTML={{ __html: point }} />
    </li>
  );
};

const ContentCard = ({ section }) => (
  <div className="w-full bg-white text-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-violet-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    
    <div className="flex items-center gap-3 mb-4">
      {ICONS[section.icon]}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {section.title}
      </h2>
    </div>

    <p className="text-gray-700 dark:text-gray-300 mb-6">
      {section.description}
    </p>

    <ul className="space-y-3">
      {section.keyPoints.map((point, index) => (
        <PointItem key={index} point={point} />
      ))}
    </ul>

  </div>
);

const CollectionFramework = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/collectionFramework")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
      />

      <div className="flex flex-col gap-10">
        {data.sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default CollectionFramework;