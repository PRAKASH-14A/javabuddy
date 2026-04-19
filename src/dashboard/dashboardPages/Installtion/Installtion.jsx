import React, { useEffect, useState } from "react";

import { Download, Settings, PlayCircle, Code } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import useContent from "@/hooks/useContent";

const iconMap = {
  Download: <Download className="text-purple-600 dark:text-purple-300" size={24} />,
  Settings: <Settings className="text-purple-600 dark:text-purple-300" size={24} />,
  PlayCircle: <PlayCircle className="text-purple-600 dark:text-purple-300" size={24} />,
  Code: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
};

const Installations = () => {
  const { data, loading, error } = useContent("install");

  return (
    <div className="w-full py-8 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Installation
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            <ul className="space-y-3">
              {card.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                >
                  <TiInputChecked className="text-green-500 mt-1" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;