import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const [number, setNumber] = useState(0);
  const handleIncrement = () => {
    setNumber((prevNum) => {
      if (prevNum === 20) {
        return 0;
      } else {
        return prevNum + 5;
      }
    });
  };
  return (
    <Layout title="Contact Page">
      <div>
        <h1>Contact Me</h1>
        <h1>{number}</h1>
        <button onClick={handleIncrement}>Increment 5</button>
        <p>
          You can contact me at{" "}
          <a href="mailto:ghoshsam37@gmail.com">ghoshsam37@gmail.com</a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
