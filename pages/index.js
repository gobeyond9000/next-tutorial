import Link from "next/link";
import { useEffect, useRef } from "react";
import Layout from "../components/Layout";

function Index() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    const data = {
      name: "iPhone Mini 64GB",
      price: 64999,
    };
    // fetch("http://localhost:8000/products", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     //   console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Layout title="Home Page">
      <div>
        <h1>Home Page</h1>
        <Link href="/about">Go to About Page</Link>
        <Link href="/posts">Go to Posts Page</Link>
      </div>
      <input type="text" ref={inputRef} />
    </Layout>
  );
}
export default Index;
