import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <>
      <Layout title={"Page not found... go back"}>
        {/* Inline CSS */}
        <style>{`
          .pnf {
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            color: #333;
            border-radius: 12px;
            padding: 20px;
            margin: 20px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }
          .pnf-title {
            font-size: 8rem;
            font-weight: bold;
            color: #ff4c4c;
            margin-bottom: 10px;
          }
          .pnf-heading {
            font-size: 2rem;
            margin-bottom: 20px;
            font-weight: 500;
          }
          .pnf-btn {
            display: inline-block;
            padding: 12px 24px;
            background: #343a40;
            color: white;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s;
          }
          .pnf-btn:hover {
            background: #495057;
          }

          @media (max-width: 768px) {
            .pnf-title {
              font-size: 5rem;
            }
            .pnf-heading {
              font-size: 1.5rem;
            }
          }
        `}</style>

        <div className="pnf">
          <h1 className="pnf-title">404</h1>
          <h2 className="pnf-heading">Oops! Page Not Found</h2>
          <Link to="/" className="pnf-btn">
            Go Back
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Pagenotfound;
