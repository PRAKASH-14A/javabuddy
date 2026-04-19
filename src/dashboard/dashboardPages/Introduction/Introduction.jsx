import React, { useEffect, useState } from "react";

import { Landmark, Wrench, ThumbsDown } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import useContent from "@/hooks/useContent";

const iconMap = {
  Java: <FaJava className="text-purple-600 dark:text-purple-300" size={24} />,
  Landmark: <Landmark className="text-purple-600 dark:text-purple-300" size={24} />,
  Wrench: <Wrench className="text-purple-600 dark:text-purple-300" size={24} />,
  ThumbsDown: <ThumbsDown className="text-red-500 dark:text-red-400" size={24} />,
};

const Introduction = () => {
  const { data, loading, error } = useContent("intro");

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="w-full py-8 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Introduction to Java
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

            {card.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                {card.description}
              </p>
            )}

            <ul className="space-y-3">
              {card.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-800 dark:text-gray-200">
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

export default Introduction;