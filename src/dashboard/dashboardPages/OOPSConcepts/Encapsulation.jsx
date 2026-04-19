import React, { useEffect, useState } from "react";
import useContent from "@/hooks/useContent";


const Encapsulation = () => {
  const { data: cards, loading, error } = useContent("encapsulation");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">💊 Encapsulation</h1>
      {cards.length > 0 ? (
        <div className="flex flex-col gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
            >
              {card.definition && (
                <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">
                  {card.definition}
                </p>
              )}

              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
                ✅ Advantages
              </h2>
              {card.advantages && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.advantages.map((item, idx) => (
                    <li key={idx}>✔️ {item}</li>
                  ))}
                </ul>
              )}

              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
                📋 Specifications
              </h2>
              {card.specifications && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.specifications.map((item, idx) => (
                    <li key={idx}>✔️ {item}</li>
                  ))}
                </ul>
              )}

              {card.example && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm mb-6">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}

              {card.SecondExample && (
                <>
                  <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">
                    ✅ {card.SecondExample}
                  </h2>
                  <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm mb-6">
                    {card.exampleTwo.map((line, idx) => (
                      <pre key={idx}>{line}</pre>
                    ))}
                  </div>
                </>
              )}

              {card.thirdExample && (
                <>
                  <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">
                    ✅ {card.thirdExample}
                  </h2>
                  <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                    {card.exampleThree.map((line, idx) => (
                      <pre key={idx}>{line}</pre>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-semibold">
          No data available. Please check your API or db.json file.
        </p>
      )}
    </div>
  );
};

export default Encapsulation;