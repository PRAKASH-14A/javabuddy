import { useState, useEffect } from "react";
import api from "../utils/api";

/**
 * Custom hook to fetch content for a specific topic from the MongoDB backend.
 * Replaces direct axios calls to json-server (localhost:3000) across all dashboard pages.
 *
 * @param {string} topic - The topic key (e.g., "intro", "DataType", "classes")
 * @returns {{ data: Array, loading: boolean, error: string|null }}
 */
const useContent = (topic) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topic) return;

    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(`/content/${topic}`);
        // Backend returns { success, topic, label, data: [...] }
        setData(res.data.data || []);
      } catch (err) {
        const msg =
          err.response?.data?.message ||
          `Failed to load content for topic: ${topic}`;
        setError(msg);
        console.error(`useContent error (${topic}):`, msg);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [topic]);

  return { data, loading, error };
};

export default useContent;
