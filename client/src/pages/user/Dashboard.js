import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <style>{`
        .user-dashboard-container {
          background: linear-gradient(to right, #e0f7fa, #ffffff);
          min-height: 100vh;
          padding: 30px;
        }

        .user-dashboard-container .card {
          background: #ffffffee;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .user-dashboard-container h3 {
          color: #333;
          margin-bottom: 15px;
        }
      `}</style>

      <div className="container-flui m-3 p-3 user-dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
