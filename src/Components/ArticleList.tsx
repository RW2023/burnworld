/* eslint-disable @next/next/no-img-element */
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

function shareArticle(platform: string, title: string, url: string) {
  let shareUrl = '';

  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url,
      )}&t=${encodeURIComponent(title)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title,
      )}&url=${encodeURIComponent(url)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(title)}`;
      break;
    case 'reddit':
      shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(title)}`;
      break;
    default:
      break;
  }

  window.open(shareUrl, '_blank');
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  if (!articles) {
    return (
      <Layout title="Fetching the Latest Headlines">
            <div className='h-screen flex items-center justify-center text-center' style={{height: '75vh'}}>
              <p className="text-lg md:text-xl lg:text-2xl sm:-mx-4">
                Loading articles. Please wait it might be a big dump.........💩
              </p>
            </div>
          </Layout>
    );
  }

  const filteredArticles = articles.filter((article) => {
    return article.title !== '[Removed]';
  });

  return (
    <Layout title="Latest Headlines">
      <div className="grid gap-6 p-4 bg-highlight grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg mr-auto ">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-background border border-headline"
          >
            <h2 className="text-base md:text-lg font-bold mb-2 text-headline">
              {article.title}
            </h2>
            <div className="flex justify-between mb-2 text-paragraph">
              <span className="text-white-800">
                By<span className="text-headline"> {article.author} | </span>
                <span className="text-button font-sans">
                  {article.source.name}
                </span>
              </span>
              <span className="text-secondary">
                Published on{' '}
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <img
              src={article.urlToImage || '/imagePlaceHolder.png'}
              alt={article.title}
              className="w-full rounded-lg mb-4 object-cover"
            />
            <p className="mb-2 text-paragraph text-lg">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-button hover:text-headline hover:text-opacity-100 hover:underline"
            >
              Read more
            </a>
            <div className="flex flex-wrap -mx-2 mt-4 md:flex-col lg:flex-col border border-highlight rounded-t bg-background justify-center">
              <div className="flex items-end text-center  justify-center text-lg align-middle">
                <p className="md:mb-1 p-1">Share</p>
              </div>

              <div className="px-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    shareArticle('facebook', article.title, article.url)
                  }
                  className="flex justify-center items-center px-4 py-2 w-full bg-background text-headline rounded hover:bg-blue-900"
                >
                  <span className="flex items-center">
                    <i className="fab fa-facebook-f mr-2"></i> Facebook
                  </span>
                </button>
              </div>
              <div className="px-2 w-full sm:w-auto mt-2 sm:mt-0">
                <button
                  type="button"
                  onClick={() =>
                    shareArticle('twitter', article.title, article.url)
                  }
                  className="flex justify-center items-center px-4 py-2 w-full bg-background text-headline rounded hover:bg-blue-900"
                >
                  <span className="flex items-center">
                    <i className="fab fa-twitter mr-2"></i> Twitter
                  </span>
                </button>
              </div>
              <div className="px-2 w-full sm:w-auto mt-2 sm:mt-0">
                <button
                  type="button"
                  onClick={() =>
                    shareArticle('linkedin', article.title, article.url)
                  }
                  className="flex justify-center items-center px-4 py-2 w-full bg-background text-headline rounded hover:bg-blue-900"
                >
                  <span className="flex items-center">
                    <i className="fab fa-linkedin-in mr-2"></i>
                    LinkedIn
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ArticleList;
