import Link from "next/link";

const CryptoList = ({ data }) => {
  return (
    <div>
      <div>
        <p>
          uses getStaticProps to fetch the data and generate page at build time
          and uses the cached version of the page on every subsequent requests
        </p>
      </div>
      <h2>List of all coins</h2>
      <ul>
        {data.map((coin) => {
          return (
            <Link key={coin.id} href={`/crypto/${coin.id}`} passHref>
              <li>{coin.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50/"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
export default CryptoList;
