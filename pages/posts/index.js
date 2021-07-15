import React from "react";
import Link from "next/link";

function Posts({ postData }) {
  console.log(postData);  
  return (
    <div>
      This is posts page
      {postData && postData.map((item) => {
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
  const res = await fetch(`${process.env.API_BASE_URL}/posts`);
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
