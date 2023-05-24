import {useState, useEffect} from 'react';
import {DateTime} from "luxon";
import {News} from '../types/News';
import {useSelector} from 'react-redux';


const useNewsApi = (query: string) => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const {locale} = useSelector((state : any) => state.language);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const from = DateTime.now().minus({days: 7}).toISODate();
      try {
        const API_KEY = '8d65b8ac69a14bad88f243500970d417';
        const url = `https://newsapi.org/v2/everything?q=${query}&from=${from}&sortBy=publishedAt&language=${locale}&apiKey=${API_KEY}`;

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
  }, [query,locale]);

  return {news, isLoading, error};
};

export default useNewsApi;
