import React from "react";
import Link from "next/link";
// import Dynamic from "next/dynamic";
// import PostHeader from "../../components/PostHeader";
import dynamic from "next/dynamic";
const PostHeader = dynamic(
  () => import("../../components/PostHeader").then((mod) => mod.PostHeader),
  {
    loading: () => <h3>Loading...</h3>,
    ssr: false,
  }
);
function Posts({ postData }) {
  // console.log(postData);
  return (
    <div>
      <PostHeader />
      {process.env.NEXT_PUBLIC_HEADER}
      {postData &&
        postData.map((item) => {
          return (
            <div className="" key={item.id}>
              <h3>
                <Link href="/posts/[id]" as={`/posts/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h3>
              <p>{item.post}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BASE_URL}/${process.env.POST}`);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const postData = await res.json();
//   return {
//     props: {
//       postData,
//     },
//   };
// }
