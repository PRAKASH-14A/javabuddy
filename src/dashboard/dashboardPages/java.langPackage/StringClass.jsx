import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coffee, CheckCircle } from "lucide-react";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">{title}</h1>
    {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
  </div>
);

const PointItem = ({ point }) => {
  if (typeof point === "object" && point.code) {
    const label = point.type === "syntax" ? "Syntax:" : point.type === "example" ? "Example:" : "Code:";
    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          {ICONS.check}
          <span className="text-gray-800 dark:text-gray-200 font-medium">{label}</span>
        </div>
        <div className="ml-8">
          <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            <code>{point.code}</code>
          </pre>
          {point.output && (
            <pre className="bg-gray-800 text-yellow-300 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap mt-2">
              {point.output}
            </pre>
          )}
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
      {ICONS.check}
      <span dangerouslySetInnerHTML={{ __html: point }} />
    </li>
  );
};

const CategorySection = ({ category, details }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">🔹 {category}</h4>
    <ul className="space-y-3 ml-4">{details.map((detail, idx) => <PointItem key={idx} point={detail} />)}</ul>
  </div>
);

const SimplePointsList = ({ points }) => <ul className="space-y-3">{points.map((p, i) => <PointItem key={i} point={p} />)}</ul>;
const CategorizedPointsList = ({ points }) => <div className="space-y-6">{points.map((grp, i) => <CategorySection key={i} category={grp.category} details={grp.details} />)}</div>;

const ContentCard = ({ section }) => {
  const isSimple = typeof section.keyPoints[0] === "string";
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {ICONS[section.icon]}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">{section.description}</p>
      {isSimple ? <SimplePointsList points={section.keyPoints} /> : <CategorizedPointsList points={section.keyPoints} />}
    </div>
  );
};

const StringClass = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/stringClass")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-lg font-semibold text-red-600">{error}</div>;

  const { header, sections } = data;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-col gap-10">{sections.map((section) => <ContentCard key={section.id} section={section} />)}</div>
    </div>
  );
};

export default StringClass;