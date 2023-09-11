// Destination
// Source: https://www.sydney.com/articles/nine-secret-sydney-spots
const { Blog } = require("../models");

const blogData = [
  {
    title: "Exploring the Depths of Deep Learning",
    createdAt: "2023-09-01T08:00:00.000Z",
    content:
      "Deep learning is a subset of machine learning that utilizes neural networks with many layers. These neural networks try to simulate the behavior of the human brain—albeit far from matching its ability—allowing it to 'learn' from large amounts of data.",
    userId: "1",
  },
  {
    title: "A Journey Through the World of Web Development",
    createdAt: "2023-08-25T16:15:00.000Z",
    content:
      "Web development has evolved drastically over the past few decades. From simple static web pages to the dynamic, responsive, and interactive UIs we see today, the world of web development offers endless possibilities.",
    userId: "2",
  },
  {
    title: "Harnessing the Power of Quantum Computing",
    createdAt: "2023-07-20T10:05:00.000Z",
    content:
      "Quantum computing, a field at the intersection of quantum mechanics and computer science, has the potential to revolutionize our world. With its ability to process complex computations at unbelievable speeds, it offers promising solutions for problems deemed unsolvable.",
    userId: "3",
  },
  {
    title: "The Rise of Augmented Reality: A New Age",
    createdAt: "2023-06-15T12:45:00.000Z",
    content:
      "Augmented reality (AR) overlays digital content and information on the physical world — as if they're actually there with you, in your own space. AR opens up new ways for your devices to be helpful throughout your day by letting you experience digital information in a whole new way.",
    userId: "4",
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
