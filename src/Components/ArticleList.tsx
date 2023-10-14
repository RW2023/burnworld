/* ArticleList.tsx */
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
      {/* Updated class names to use Tailwind CSS and DaisyUI */}
      <div className="grid gap-6 p-4 bg-gray-900 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-black border border-white"
          >
            <h2 className="text-lg font-bold mb-2 text-headline">
              {article.title}
            </h2>
            <div className="flex justify-between mb-2 text-gray-400">
              <span className='text-highlight'>
                By {article.author} | {article.source.name}
              </span>
              <span className='text-whitesmoke'>
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
            <p className="mb-2 text-main text-lg">{article.description}</p>
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
