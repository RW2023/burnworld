// pages/jamaicanNews.tsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList, { Article } from '../Components/ArticleList';

const JamaicanNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/news?country=jm');
        setArticles(response.data.articles);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching Jamaican news data:', error.message);
        } else {
          console.error('An unknown error occurred:', error);
        }
      }
    };
    fetchData();
  }, []);

  return <ArticleList articles={articles} />;
};

export default JamaicanNews;
