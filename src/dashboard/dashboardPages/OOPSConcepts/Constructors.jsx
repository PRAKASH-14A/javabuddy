import React, { useEffect, useState } from "react";
import { Wrench, ListChecks, Repeat, Link, ThumbsUp } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import constructorImg from "../../../assets/constructors/Picture4.jpg";
import useContent from "@/hooks/useContent";


const iconMap = {
  Wrench: <Wrench className="text-purple-600 dark:text-purple-300" size={24} />,
  ListChecks: <ListChecks className="text-blue-600 dark:text-blue-300" size={24} />,
  Repeat: <Repeat className="text-orange-600 dark:text-orange-300" size={24} />,
  Link: <Link className="text-red-500 dark:text-red-400" size={24} />,
  ThumbsUp: <ThumbsUp className="text-pink-600 dark:text-pink-300" size={24} />
};

const Constructors = () => {
  const { data: cards, loading, error } = useContent("constructors");

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Constructors
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {cards.map((card) => (
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
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                {card.description}
              </p>
            )}

            {card.points?.length > 0 && (
              <ul className="space-y-3 mb-6">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                  >
                    <TiInputChecked className="text-green-500 mt-1" size={20} />
                    <span className="whitespace-pre-line font-mono">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                {card.code}
              </pre>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <img
          src={constructorImg}
          alt="Constructor image"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Constructors;