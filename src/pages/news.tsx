// pages/news.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList, { Article } from '../Components/ArticleList'; 

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/news');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
    fetchData();
  }, []);

  return <ArticleList articles={articles} />;
};

export default News;
