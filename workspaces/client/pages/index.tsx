import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    fetch('/api/ping')
      .then((res) => res.json())
      .then(console.log);
  });

  return (
    <div className="h-screen bg-blue-50 p-24 dark:bg-[#3C4657]">
      <div className="m-auto flex h-full w-full items-center justify-center rounded-xl bg-white px-4 shadow-md dark:bg-[#1B212C]">
        <h1 className="text-base text-gray-500 dark:text-[#FFD6AE] sm:text-3xl">
          Hello from Next.js
        </h1>
      </div>
    </div>
  );
};

export default Home;
