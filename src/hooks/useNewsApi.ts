import {useState, useEffect} from 'react';
import {News} from '../types/News';

const useNewsApi = (query: string) => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const API_KEY = '8d65b8ac69a14bad88f243500970d417';
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

        const response = await fetch(url);

        if (response.status === 200) {
          const jsonData = await response.json();
          if (jsonData && jsonData.articles) {
            setNews(jsonData.articles);
          } else {
            setError(new Error('Invalid response data'));
          }
        } else {
          setError(
            new Error(`Request failed with status code ${response.status}`),
          );
        }
      } catch (error) {
        setError(error as Error);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return {news, isLoading, error};
};

export default useNewsApi;
