'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList, { Article } from '@/Components/ArticleList';
import Layout from './Layout'


const CanadianNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Set default state to an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/news?country=ca');
        const allArticles = response.data.articles;

        // Filter articles based on criteria
        const articlesWithBoth = allArticles.filter(
            (article: Article) => article.description && article.urlToImage,
        );
        // const articlesWithNoImage = allArticles.filter(
        //   (article: Article) => article.description && !article.urlToImage,
        // );

        // Combine the filtered articles, placing articles with no image at the end
        setArticles(allArticles);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching Canadian news data:', error.message);
        } else {
          console.error('An unknown error occurred:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>);
};

export default CanadianNews;
