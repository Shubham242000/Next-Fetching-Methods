import Link from "next/link";

const temp = ({ data }) => {
  return (
    <div>
      <p>
        Fetches external data using getStaticProps , page generated at build
        time
      </p>
      <h1>Users</h1>
      <hr />
      {data.map((user) => {
        return (
          <Link key={user.id} href={`/users/${user.id}`} passHref>
            <h4>{user.name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default temp;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
