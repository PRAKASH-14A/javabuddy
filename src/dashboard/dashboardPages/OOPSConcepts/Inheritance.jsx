import React, { useEffect, useState } from "react";
import axios from "axios";
import { GitBranch, Layers, Link, Network, ShieldOff } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import singleInheritanceImg from "../../../assets/inheritance/Picture1.png";
import multiLevelInheritanceImg from "../../../assets/inheritance/Picture2.png";
import hierarchicalInheritanceImg from "../../../assets/inheritance/Picture3.png";
import hybridInheritanceImg from "../../../assets/inheritance/Picture4.png";

// Icon map
const iconMap = {
  GitBranch: (
    <GitBranch className="text-purple-600 dark:text-purple-300" size={24} />
  ),
  Layers: <Layers className="text-blue-600 dark:text-blue-300" size={24} />,
  Link: <Link className="text-green-600 dark:text-green-300" size={24} />,
  Network: (
    <Network className="text-orange-600 dark:text-orange-300" size={24} />
  ),
  ShieldOff: <ShieldOff className="text-red-500 dark:text-red-400" size={24} />,
};

// Map card IDs to images
const imageMap = {
  2: singleInheritanceImg,
  3: multiLevelInheritanceImg,
  5: hierarchicalInheritanceImg,
  6: hybridInheritanceImg,
};

const Inheritance = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/inheritance")
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Inheritance
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
              <p className="text-gray-700 dark:text-gray-300 mb-5 text-base leading-relaxed">
                {card.description}
              </p>
            )}

            {card.code && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-6 whitespace-pre-wrap">
                {card.code}
              </pre>
            )}

            {imageMap[card.id] && (
              <div className="mt-4">
                <img
                  src={imageMap[card.id]}
                  alt={`${card.title} Image`}
                  className={`rounded-lg shadow-md ${
                    card.id === 2 || card.id === 3 ? "w-[20%]" : "w-[30%]"
                  }`}
                />
              </div>
            )}

            {card.points && card.points.length > 0 && (
              <ul className="space-y-3 mt-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inheritance;