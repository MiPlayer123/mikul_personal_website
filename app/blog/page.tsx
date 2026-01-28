import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export const metadata = {
  title: "Blog | Mikul",
  description: "Mikul Saravanan's blog about tech, robotics, startups, and more.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-6 py-8 sm:py-12 lg:px-8">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors mb-8 sm:mb-12 group"
        >
          <BsArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Blog Header */}
        <header className="mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mikul's Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Thoughts on tech, robotics, startups, and everything in between.
          </p>
        </header>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="h-full p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/50 transition-all duration-300">
                  {/* Date */}
                  <time className="text-sm text-gray-500 dark:text-gray-500 mb-4 block">
                    {formatDate(post.date)}
                  </time>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    Read article
                    <svg
                      className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
