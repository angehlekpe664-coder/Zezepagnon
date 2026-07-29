import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { BLOG_POSTS } from '../data/blogPosts';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ name: 'Blog Médical & Recherche' }]} />

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
          ACTUALITÉS & ÉTUDES
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          Le Blog de l'Immunothérapie au Bénin
        </h1>
        <p className="text-sm text-gray-600">
          Articles scientifiques, conseils de nos immunologues et découvertes médicales de pointe.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass-card rounded-3xl overflow-hidden bg-white border border-gray-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#0F62FE] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center space-x-1"><User size={13} /> <span>{post.author}</span></span>
                    <span className="flex items-center space-x-1"><Calendar size={13} /> <span>{post.date}</span></span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0F62FE] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex justify-between items-center text-xs font-bold text-[#0F62FE]">
                <span>Lire l'article complet</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
