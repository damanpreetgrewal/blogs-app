import { articles } from "../../../data";

export default function ({ query: { id } }, res) {
  const filteredArticles = articles.filter((article) => article.id === id);

  if (filteredArticles.length > 0) {
    res.status(200).json(filteredArticles[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
};
