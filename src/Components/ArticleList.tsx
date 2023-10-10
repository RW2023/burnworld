// Components/ArticleList.tsx
import React from 'react';
import Layout from './Layout';

export type Article = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Props = {
  articles: Article[] | undefined;
};

const ArticleList: React.FC<Props> = ({ articles }) => {
  if (!articles) {
    return <Layout title="News">Loading articles. Please wait it might be a big dump.........💩</Layout>;
  }

  const filteredArticles = articles.filter((article) => {
    return (
      article.author &&
      article.source.name &&
      new Date(article.publishedAt).getFullYear() > 1970
    );
  });

  return (
    <Layout title="Latest Headlines">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4"
        data-theme="black"
      >
        {filteredArticles.map((article, index) => (
          <div key={index} className="p-4 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-headline mb-2">
              {article.title}
            </h2>
            <div className="flex justify-between mb-2">
              <span className="text-paragraph">
                By {article.author} | {article.source.name}
              </span>
              <span className="text-paragraph">
                Published on{' '}
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-stroke mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ArticleList;
