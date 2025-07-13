import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <style>{`
        .contact-page {
          background: linear-gradient(to right, #fdfbfb, #ebedee);
          min-height: 100vh;
          padding: 40px 20px;
        }

        .contact-page img {
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .contact-page h1 {
          background-color: #2c3e50;
          color: white;
          padding: 10px;
          border-radius: 8px;
        }

        .contact-page p {
          font-size: 1.05rem;
          color: #333;
        }

        .contact-page .icon {
          font-size: 1.2rem;
          margin-right: 10px;
          color: #007bff;
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 20px 10px;
          }

          .contact-page img {
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className="row contactus contact-page">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="text-center">CONTACT US</h1>
          <p className="text-justify mt-3">
            For any queries or information about our products, feel free to
            reach out to us. We're available <strong>24/7</strong> to assist
            you.
          </p>
          <p className="mt-4">
            <BiMailSend className="icon" /> Email: farzispam125@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall className="icon" /> Phone: 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport className="icon" /> Support: 1800-0000-0000 (Toll-Free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
