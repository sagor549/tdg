// src/components/Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="relative py-28 md:py-36 overflow-hidden bottom-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-500 mb-6 font-serif tracking-tight">
            GOAT Blog
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
        </div>
        
        {/* Coming Soon Card */}
        <div className="bg-gradient-to-br from-blue-900/30 to-black/30 backdrop-blur-sm rounded-2xl p-12 md:p-16 border border-blue-800/30 shadow-2xl text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-900/50 rounded-full mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
              Premium Content Coming Soon
            </h3>
            
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              We're crafting exceptional stories about the art of vodka-making, exclusive cocktail recipes, and industry insights.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="text-blue-400 text-2xl font-serif italic tracking-wide animate-pulse">
              Stay tuned for something extraordinary...
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default Blog;