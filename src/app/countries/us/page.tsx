// pages/news.tsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList, { Article } from '../../../Components/ArticleList'; 
import Layout from './Layout';

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

  return (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>);
};

export default News;
