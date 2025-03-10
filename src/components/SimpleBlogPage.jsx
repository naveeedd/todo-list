import React from 'react';

const SimpleBlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "March 10, 2025",
      author: "Jamie Smith",
      content: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React components, state, and props. React makes it easy to create interactive UIs and efficiently update your application when data changes."
    },
    {
      id: 2,
      title: "The Benefits of Meditation",
      date: "March 7, 2025",
      author: "Alex Johnson",
      content: "Regular meditation practice can reduce stress, improve focus, and increase overall well-being. Even just 10 minutes a day can make a significant difference in how you feel and perform throughout your day."
    },
    {
      id: 3,
      title: "Quick and Healthy Breakfast Ideas",
      date: "March 5, 2025",
      author: "Sam Taylor",
      content: "Starting your day with a nutritious breakfast sets you up for success. Here are some quick options: overnight oats, smoothie bowls, and avocado toast with eggs. These meals provide essential nutrients while being easy to prepare."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
     
      <header className="text-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">My Simple Blog</h1>
        <p className="text-gray-600">Thoughts and ideas worth sharing</p>
      </header>

      
      <div className="space-y-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <div className="text-gray-500 text-sm mb-4">
              Posted on {post.date} by {post.author}
            </div>
            <p className="text-gray-700">{post.content}</p>
            <button className="mt-4 text-blue-600 hover:underline">Read more</button>
          </article>
        ))}
      </div>

      {/* Simple Footer */}
      <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-sm">
        <p>© 2025 My Simple Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SimpleBlogPage;