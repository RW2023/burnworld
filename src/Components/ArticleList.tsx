/* ArticleList.tsx */
import React from 'react';
import Layout from './Layout';
import styles from './ArticleList.module.css'; // Import CSS Module

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
    return (
      <Layout title="News">
        Loading articles. Please wait it might be a big dump.........💩
      </Layout>
    );
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
      <div className={styles.container} data-theme="black">
        {filteredArticles.map((article, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{article.title}</h2>
            <div className={styles.info}>
              <span>
                By {article.author} | {article.source.name}
              </span>
              <span>
                Published on{' '}
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <img
              src={article.urlToImage}
              alt={article.title}
              width={1080}
              height={1080}
              className="w-full rounded-lg mb-4"
            />
            <p className={styles.description}>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
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
