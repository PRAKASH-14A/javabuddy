import React, { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/listData")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="py-8">
      {data.map((card) => (
        <div
          key={card.id}
          className="w-full bg-white text-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-violet-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <h2 className="text-xl font-bold mb-2">
            {card.topic || card.Topic || card.Toic}
          </h2>

          {card.Note && (
            <div className="mb-2">
              <h3 className="font-semibold underline">Notes:</h3>
              <ul className="list-disc list-inside">
                {card.Note.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {card.ListNote && (
            <div className="mb-2">
              <h3 className="font-semibold underline">List Notes:</h3>
              <ul className="list-disc list-inside">
                {card.ListNote.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {card.Method && (
            <div className="mb-2">
              <h3 className="font-semibold underline">Methods:</h3>
              <ul className="list-disc list-inside">
                {card.Method.map((method, idx) => (
                  <li key={idx}>{method}</li>
                ))}
              </ul>
            </div>
          )}

          {card.ArrayListNotes && (
            <div className="mb-2">
              <h3 className="font-semibold underline">ArrayList Notes:</h3>
              <ul className="list-disc list-inside">
                {card.ArrayListNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {card.ArrayListConstructor && (
            <div className="mb-2">
              <h3 className="font-semibold underline">
                ArrayList Constructors:
              </h3>
              <ul className="list-disc list-inside">
                {card.ArrayListConstructor.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          )}

          {card.LinkedListNotes && (
            <div className="mb-2">
              <h3 className="font-semibold underline">LinkedList Notes:</h3>
              <ul className="list-disc list-inside">
                {card.LinkedListNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {card.LinkedlistConstructors && (
            <div className="mb-2">
              <h3 className="font-semibold underline">
                LinkedList Constructors:
              </h3>
              <ul className="list-disc list-inside">
                {card.LinkedlistConstructors.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          )}

          {card.VectorConstruction && (
            <div className="mb-2">
              <h3 className="font-semibold underline">
                Vector Constructors:
              </h3>
              <ul className="list-disc list-inside">
                {card.VectorConstruction.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          )}

          {card.StackConstructors && (
            <div className="mb-2">
              <h3 className="font-semibold underline">
                Stack Constructors:
              </h3>
              <ul className="list-disc list-inside">
                {card.StackConstructors.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
          )}

          {card.Methods && (
            <div className="mb-2">
              <h3 className="font-semibold underline">Methods:</h3>
              <ul className="list-disc list-inside">
                {card.Methods.map((method, idx) => (
                  <li key={idx}>{method}</li>
                ))}
              </ul>
            </div>
          )}

          {card.important && (
            <div className="mb-2">
              <h3 className="font-semibold underline">
                Important Points:
              </h3>
              <ul className="list-disc list-inside">
                {card.important.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {card.Example && (
            <div className="mb-2 bg-black text-green-950">
              <h3 className="font-semibold underline">Example:</h3>
              <pre className="p-2 rounded text-sm overflow-x-auto bg-black text-green-800">
                {card.Example.join("\n")}
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;