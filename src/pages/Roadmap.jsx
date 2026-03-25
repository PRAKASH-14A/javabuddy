import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  ChevronDown, ChevronRight, Code, Database, Cog, Package, Shield, Zap,
  BookOpen, Target, Star
} from 'lucide-react';

const roadmapData = [
  { id: 'intro', title: 'Java Intro', icon: BookOpen, color: 'from-indigo-500 to-blue-400', description: 'Start your Java journey here', items: [] },
  { id: 'setup', title: 'Setup & Config', icon: Cog, color: 'from-fuchsia-500 to-pink-400', description: 'Environment setup and JDK installation', items: [] },
  { id: 'basics', title: 'Java Basics', icon: Code, color: 'from-yellow-400 to-orange-500', description: 'Understand Java fundamentals', items: ['Data Type', 'Variables', 'Type Casting', 'Operators', 'Flow Control'] },
  { id: 'oop', title: 'OOP Concepts', icon: Target, color: 'from-teal-500 to-green-400', description: 'Master OOP with Java', items: ['Class','Methods','Inheritance','Polymorphism'] },
  { id: 'lang', title: 'java.lang', icon: Package, color: 'from-rose-500 to-red-400', description: 'Explore java.lang classes', items: ['Object','String','Wrapper Classes','Autoboxing'] },
  { id: 'exception', title: 'Exception Handling', icon: Shield, color: 'from-sky-500 to-blue-300', description: 'Handle errors', items: ['Try-Catch','Throw vs Throws','Custom Exception'] },
  { id: 'collection', title: 'Collections', icon: Zap, color: 'from-lime-500 to-green-500', description: 'Master collections', items: ['List','Set','Map','Queue','Iterator'] }
];

const Section = memo(({ section, index, expanded, completed, onToggleSection, onToggleComplete }) => {
  const Icon = section.icon;

  return (
    <div className="relative mb-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
        <div className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl border-4 border-white bg-gradient-to-br ${section.color}`}>
          <Icon className="text-white w-6 h-6" />
        </div>
      </div>

      <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className="w-6/12 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition duration-300 hover:scale-[1.02]">

            <div onClick={() => onToggleComplete(section.id)} className="flex items-center justify-between cursor-pointer mb-2">
              <h2 className="text-white font-bold text-xl">{section.title}</h2>
              <div className="flex items-center space-x-2">
                {completed[section.id] && <Star className="text-yellow-400 fill-yellow-400" />}
                <div className={`w-5 h-5 rounded-full border-2 ${completed[section.id] ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} />
              </div>
            </div>

            <p className="text-gray-300 text-sm">{section.description}</p>

            {section.items.length > 0 && (
              <>
                <button onClick={() => onToggleSection(section.id)} className="flex items-center text-blue-300 mt-3">
                  {expanded[section.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  <span className="ml-1 text-sm">{section.items.length} topics</span>
                </button>

                {expanded[section.id] && (
                  <ul className="mt-3 space-y-2">
                    {section.items.map((item, idx) => {
                      const key = `${section.id}-${idx}`;
                      return (
                        <li key={key} onClick={() => onToggleComplete(key)} className="text-sm text-gray-300 cursor-pointer hover:text-white flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full border-2 ${completed[key] ? 'bg-green-400 border-green-400' : 'border-gray-500'}`} />
                          <span className={completed[key] ? 'line-through text-green-400' : ''}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Roadmap = () => {
  const [expanded, setExpanded] = useState(() => JSON.parse(localStorage.getItem('expandedSections')) || {});
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem('completedItems')) || {});
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => localStorage.setItem('expandedSections', JSON.stringify(expanded)), [expanded]);
  useEffect(() => localStorage.setItem('completedItems', JSON.stringify(completed)), [completed]);

  const onToggleSection = useCallback((id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const onToggleComplete = useCallback((id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const getCompletionPercentage = () => {
    let total = 0;
    let done = 0;

    roadmapData.forEach(section => {
      if (section.items.length > 0) {
        total += section.items.length;
        section.items.forEach((_, i) => {
          if (completed[`${section.id}-${i}`]) done++;
        });
      } else {
        total += 1;
        if (completed[section.id]) done++;
      }
    });

    return total === 0 ? 0 : Math.min(100, Math.round((done / total) * 100));
  };

  const progress = getCompletionPercentage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Java Buddy Roadmap
          </h1>

          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-400">Progress: {progress}%</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full opacity-20" />

          {roadmapData.map((section, index) => (
            <Section
              key={section.id}
              section={section}
              index={index}
              expanded={expanded}
              completed={completed}
              onToggleSection={onToggleSection}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <button
              onClick={() => setShowReviewModal(true)}
              className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Review Progress
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;