import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Indoor Plants for Beginners",
    description: "Discover easy-to-grow indoor plants that purify air and require low maintenance.",
    content: "Here are the top 5 indoor plants: 1. Snake Plant, 2. Peace Lily, 3. Spider Plant, 4. Pothos, 5. ZZ Plant. These are great for beginners due to their low maintenance needs and air-purifying qualities.",
    image: "https://i.pinimg.com/736x/54/34/cb/5434cb2a673b3d623ab6e0e04b098dfa.jpg",
    category: "Beginner Guide",
    date: "June 25, 2025",
  },
  {
    id: 2,
    title: "How Often Should You Water Succulents?",
    description: "Learn the perfect watering routine for keeping succulents happy and healthy.",
    content: "Succulents need water only when their soil is completely dry. This usually means once every 1-2 weeks. Always use pots with drainage.",
    image: "https://www.epicgardening.com/wp-content/uploads/2023/09/Gardener-watering-a-succulent-plant-sitting-on-a-table.jpg",
    category: "Watering Tips",
    date: "June 20, 2025",
  },
  {
    id: 3,
    title: "Plant Care During Rainy Season",
    description: "Tips for preventing root rot and fungal infections during the monsoon.",
    content: "Keep your plants in well-drained soil. Avoid overwatering. Increase sunlight exposure. Remove yellow leaves to avoid fungi growth.",
    image: "https://www.fnp.com/assets/images/custom/articles/Banner-17-07-2023.jpg",
    category: "Seasonal Care",
    date: "June 15, 2025",
  },
];

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="bg-[#f8fdf6] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1f3522]">🌿 Latest from the Blog</h2>
        <p className="text-gray-600 mt-2">Get helpful plant care tips and insights</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-green-600 font-medium">{blog.category} • {blog.date}</p>
              <h3 className="text-xl font-semibold text-[#1f3522] mt-1">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
              <button
                onClick={() => openModal(blog)}
                className="mt-4 text-green-700 hover:underline text-sm font-semibold"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-xl w-full mx-4 rounded-xl p-6 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h2 className="text-2xl font-bold text-[#1f3522] mb-2">{selectedBlog.title}</h2>
            <p className="text-sm text-green-700 mb-4">{selectedBlog.category} • {selectedBlog.date}</p>
            <p className="text-gray-700 text-sm whitespace-pre-line">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
