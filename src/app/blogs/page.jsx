import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {

    const blogs = [
      {
        id: 1,
        title: "Getting Started with Web Development",
        author: "Tarek Abdullah Miraj",
        date: "2026-05-23",
        category: "Web Development",
        description:
          "Learn the basics of HTML, CSS, and JavaScript to start your journey as a web developer.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        id: 2,
        title: "Introduction to Artificial Intelligence",
        author: "Tarek Abdullah Miraj",
        date: "2026-05-20",
        category: "Artificial Intelligence",
        description:
          "A beginner-friendly overview of AI, machine learning, and how they are changing the world.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      },
      {
        id: 3,
        title: "Top 5 Tips for Competitive Programming",
        author: "Tarek Abdullah Miraj",
        date: "2026-05-18",
        category: "Programming",
        description:
          "Improve your problem-solving skills with these essential tips for competitive programming.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      },
      {
        id: 4,
        title: "Why React is Popular in 2026",
        author: "Tarek Abdullah Miraj",
        date: "2026-05-15",
        category: "React",
        description:
          "Explore the reasons behind React's popularity and why developers still love using it.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Blogs Page</h2>

            {blogs.map(blog => (
                <div key={blog.id}>
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <Link href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">
                        Show Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogsPage;