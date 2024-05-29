import React from 'react';
import Head from 'next/head';


const Page: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-[#7BA0FF]">
        <h1 className="text-4xl font-bold text-white">WTFlcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Page;
