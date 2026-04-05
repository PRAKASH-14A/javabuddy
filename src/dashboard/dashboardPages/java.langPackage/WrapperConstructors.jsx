import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListChecks, Code, AlertTriangle, CheckCircle } from "lucide-react";

const ICONS = {
  compare: <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />,
  code: <Code className="text-blue-600 dark:text-blue-300" size={20} />,
  error: <AlertTriangle className="text-red-600 dark:text-red-300" size={20} />,
  success: <CheckCircle className="text-green-600 dark:text-green-300" size={20} />
};

const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">{title}</h1>
  </div>
);

const CodeBlock = ({ code, comment, status }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg font-mono text-sm ${
    status === "error"
      ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
      : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
  }`}>
    <div className="flex-1">
      <code className="text-gray-800 dark:text-gray-200">{code}</code>
      <span className={`ml-2 ${status === "error" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
        {comment}
      </span>
    </div>
  </div>
);

const WrapperClassCard = ({ wrapperType, data }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      <Code className="text-blue-600 dark:text-blue-300" size={24} />
      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">{wrapperType} Wrapper</h3>
    </div>
    {data.note && <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">{data.note}</p>}

    <div className="grid gap-4">
      {data.examples.map((item, idx) =>
        item.items ? (
          <div key={idx}>
            <h4 className="text-md font-semibold text-blue-600 dark:text-blue-300 mb-3 border-b border-blue-200 dark:border-blue-700 pb-1">{item.group}</h4>
            <div className="space-y-3">
              {item.items.map((sub, i) => (
                <div key={i} className="space-y-2">
                  <h5 className="font-semibold text-sm text-gray-900 dark:text-white">{sub.feature}</h5>
                  <CodeBlock code={sub.example} comment={sub.comment} status={sub.status} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div key={idx} className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.feature}</h4>
            <CodeBlock code={item.example} comment={item.comment} status={item.status} />
          </div>
        )
      )}
    </div>
  </div>
);

const ContentCard = ({ icon, title, children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-purple-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <div className="flex items-center gap-3 mb-4">{icon}<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2></div>
    <div>{children}</div>
  </div>
);

const WrapperConstructors = () => {
  const [data, setData] = useState(null);
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/wrapperData")
      .then(res => {
        setData(res.data.wrapperConstructors);
        setTable(res.data.wrapperTypeTable);
      })
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title="Wrapper Constructors" />

      <div className="space-y-8">
        <ContentCard icon={ICONS.compare} title="What is a Wrapper Constructor?">
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            A wrapper class in Java is used to wrap primitive types (int, float, etc.) into objects. The constructor accepts either a <span className="font-semibold text-purple-600 dark:text-purple-300">primitive type</span> or a <span className="font-semibold text-purple-600 dark:text-purple-300">string</span>.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm"><strong>Note:</strong> Wrapper constructors are deprecated since Java 9. Use valueOf() instead.</p>
          </div>
        </ContentCard>

        <div className="grid gap-8">
          {Object.entries(data).map(([key, value]) => <WrapperClassCard key={key} wrapperType={key} data={value} />)}
        </div>

        <ContentCard icon={ICONS.code} title="Primitive Types vs Wrapper Classes">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-purple-300 dark:border-purple-700 text-sm text-white">
              <thead className="bg-purple-100 dark:bg-purple-900">
                <tr>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center">Primitive Data Type</th>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center">Wrapper Class</th>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center">Constructor Argument</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-purple-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 font-mono text-center">{row.primitive}</td>
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 font-mono text-center">{row.wrapper}</td>
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center">{row.constructorArgs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default WrapperConstructors;