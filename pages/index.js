import { server } from "../config";
import ArticleList from "../components/ArticleList";

const index = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};

export default index;
