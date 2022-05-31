import Image from "next/image";
import Link from "next/link";

const NewsPage = ({ data }) => {
  const { articles } = data;
  return (
    <div>
      <p>getStaticProps, pre-rendered at build time with ISR of 10s</p>
      {articles.map((article) => {
        return (
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
            }}
            id="newsBlock"
          >
            <h2>{article.title}</h2>
            <img
              src={article.urlToImage}
              width={150}
              // layout="fill"
              // objectFit="contain"
            />
            <h3>{article.description}</h3>
            <p>{article.content}</p>
            <a
              href={article.url}
              target="_blank"
              style={{
                color: "blue",
              }}
            >
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPage;
export async function getStaticProps() {
  console.log("Generating / Re - Generating");
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=3ad7b4f86928410688934965fe57ea2b"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
