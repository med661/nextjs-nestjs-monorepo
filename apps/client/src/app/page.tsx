'use client'

import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        {/* Your main content goes here */}
        <h1 className="hello-world">Hello World it is a monorepo using nestjs and nextjs</h1>

        <style jsx>{`
  .hello-world {
    font-family: 'Arial', sans-serif;
    font-size: 2.5rem;
    color: #3498db;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`}</style>

      </main>
      {/* <Footer /> */}
    </div>
  );
}
