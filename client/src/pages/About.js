import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About e-commerce app"}>
      <style>{`
        .about-page {
          background: linear-gradient(to right, #f1dbdbff, #e0f7fa);
          min-height: 100vh;
          padding: 40px 20px;
        }

        .about-page img {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .about-page p {
          font-size: 1.1rem;
          color: #333;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 20px 10px;
          }

          .about-page p {
            text-align: justify;
          }
        }
      `}</style>

      <div className="row contactus about-page">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our E-Commerce platform — your one-stop shop for quality,
            convenience, and affordability. We are a team of passionate
            innovators and professionals committed to revolutionizing the way
            people shop online. Our goal is to provide a seamless and enjoyable
            shopping experience with a wide range of products across all
            categories — from fashion and electronics to home essentials.
            <br />
            <br />
            Built with the latest technology, our platform is fast, secure, and
            mobile-friendly. We prioritize customer satisfaction by offering
            fast delivery, easy returns, and dedicated support.
            <br />
            <br />
            Thank you for choosing us. We're excited to be part of your journey!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
