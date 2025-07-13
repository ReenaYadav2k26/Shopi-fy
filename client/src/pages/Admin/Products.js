import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <style>{`
        .products-page {
          background: linear-gradient(to right, #fdfbfb, #ebedee);
          min-height: 100vh;
          padding: 30px;
        }

        .products-page h1 {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 30px;
        }

        .products-page .product-link {
          text-decoration: none;
          color: inherit;
        }

        .products-page .product-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: flex-start;
        }

        .products-page .card {
          width: 100%;
          max-width: 280px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .products-page .card:hover {
          transform: scale(1.03);
        }

        .products-page .card-img-top {
          width: 100%;
          height: auto;
          max-height: 220px;
          object-fit: contain;
          background-color: #fff;
          padding: 10px;
        }

        .products-page .card-body {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .products-page .card-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .products-page .card-text {
          color: #555;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .products-page .product-grid {
            justify-content: center;
          }
        }
      `}</style>

      <div className="products-page">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <div className="product-grid">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
