import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    fetch('/api/ping')
      .then((res) => res.json())
      .then(console.log);
  });

  return (
    <div className="h-screen p-24 bg-blue-50 dark:bg-[#3C4657]">
      <div className="shadow-md rounded-xl m-auto w-full h-full flex items-center justify-center bg-white dark:bg-[#1B212C] px-4">
        <h1 className="text-gray-500 dark:text-[#FFD6AE] text-base sm:text-3xl">
          Hello from Next.js
        </h1>
      </div>
    </div>
  );
};

export default Home;
