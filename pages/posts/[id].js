import React from "react";
import { useRouter } from "next/router";

function PostId({ data }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div className="">Page is Loading...</div>
    }
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default PostId;

export async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2", "/posts/3"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// export async function getServerSideProps({ query }) {
//   const { id } = query;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
