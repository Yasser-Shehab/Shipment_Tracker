import { useState, useEffect } from 'react';

interface FetchData<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useFetch = <T,>(url: string): FetchData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json as T);
      } catch (error) {
        setError(error as Error | null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
