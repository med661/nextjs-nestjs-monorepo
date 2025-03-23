'use client'

import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* <Navbar /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="welcome-title">Welcome to Our Monorepo</h1>
          <p className="welcome-subtitle">Built with Next.js and Nest.js</p>
          
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Next.js Frontend</h3>
              <p>Modern React framework for production</p>
            </div>
            <div className="feature-card">
              <h3>Nest.js Backend</h3>
              <p>Progressive Node.js framework</p>
            </div>
          </div>
          <div className="contact-info">
            <h3>Contact Me</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/salah-sfar" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://portfolio-5gh8.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/med661" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="created-by">
            <p>Created by Salah Sfar</p>
          </div>
        </div>

        <style jsx>{`
          .welcome-title {
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 3.5rem;
            font-weight: 700;
            color: #2d3748;
            text-align: center;
            margin-bottom: 1rem;
            animation: fadeIn 0.8s ease-in;
          }

          .welcome-subtitle {
            font-size: 1.5rem;
            color: #4a5568;
            text-align: center;
            margin-bottom: 3rem;
            animation: slideUp 0.6s ease-out;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
          }

          .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }

          .feature-card p {
            color: #718096;
            line-height: 1.5;
          }

          .contact-info {
            margin-top: 3rem;
            text-align: center;
          }

          .contact-info h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 1rem;
          }

          .contact-info ul {
            list-style: none;
            padding: 0;
          }

          .contact-info li {
            margin-bottom: 0.5rem;
          }

          .contact-info a {
            color: #3182ce;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .contact-info a:hover {
            color: #2b6cb0;
          }

          .created-by {
            margin-top: 2rem;
            text-align: center;
            font-size: 1rem;
            color: #4a5568;
          }
        `}</style>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
