import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <style>
        {`
          .admin-dashboard-container {
            background: linear-gradient(to right, #f0f3dfff, #637182ff);
            min-height: 100vh;
            padding: 30px;
          }

          .admin-card {
            background: linear-gradient(135deg, #9cd3d7ff, #aad1e7ff);
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            color: #333;
          }

          .admin-card h3 {
            margin-bottom: 15px;
            font-weight: 600;
          }
        `}
      </style>

      <div className="container-fluid m-3 p-3 admin-dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 admin-card">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
