import { useRouter } from "next/router";

const SingleTemp = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>
        Uses getStaticPaths with Fallback as True, so this page was not
        generated at build time, rather it was pre-rendered on the first request
        to the server, and the cached.
      </p>
      <p> {data.id} </p>
      <p> {data.name} </p>
      <p> {data.email} </p>
      <p> {data.username} </p>
    </div>
  );
};

export default SingleTemp;
export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { userId } = params;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    console.log(data);
    if (!res || !data.id) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
// export async function getStaticProps(context) {
//   const { params } = context;
//   const { userId } = params;

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   const data = await res.json();
//   if (!data.id) {
//     return { notFound: true };
//   }
//   return {
//     props: {
//       data,
//     },
//   };

// }
