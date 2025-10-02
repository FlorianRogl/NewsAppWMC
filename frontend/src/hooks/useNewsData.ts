import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../types';

export const useNewsData = (category: string, max: number, language: string) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
                    params: {
                        apikey: '1c373e93f79387fc88417f2784fdc6f1',
                        category: category === 'all' ? undefined : category,
                        max: max,
                        lang: language === 'de' ? 'de' : 'en'
                    }
                });
                setArticles(response.data.articles || []);
            } catch (error) {
                console.error('Error fetching news:', error);
                setArticles([]);
            }
            setLoading(false);
        };

        fetchNews();
    }, [category, max, language]);

    return { articles, loading };
};