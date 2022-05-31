import { useRouter } from "next/router";

const SingleCoin = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/crypto");
  };
  return (
    <div>
      <button onClick={handleClick}>List of Coins</button>
      <p>
        uses getServerSideProps to fetch the data and generate page on every
        request to the server.
      </p>
      <h3>Market Value</h3>
      <p>
        1 {data.name} equals inr {data.market_data.current_price.inr}
      </p>
      <p>
        1 {data.name} equals usd {data.market_data.current_price.usd}
      </p>
    </div>
  );
};

export default SingleCoin;
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req);
  console.log(res);
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
