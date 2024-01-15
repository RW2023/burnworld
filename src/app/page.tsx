'use client';
import Link from 'next/link';



export default function Home() {
  return (
    <div
      data-theme="business"
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/hero.png)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Burn World News</h1>
          <h2>Headlines From Around The World</h2>
          <Link href="/countries/us">
            <button className="btn btn-primary">Read News</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
