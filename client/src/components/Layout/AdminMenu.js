import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <style>
        {`
          .admin-menu-container {
            background: linear-gradient(135deg, #84cac6ff, #b2778aff);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-width: 300px;
            margin: 0 auto;
          }

          .admin-menu-container h4 {
            color: #4a4a4a;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .admin-menu-container .list-group-item {
            border: none;
            margin-bottom: 10px;
            transition: background 0.3s ease, transform 0.2s ease;
            color: #333;
            background-color: #ffffffb3;
            border-radius: 8px;
            font-weight: 500;
          }

          .admin-menu-container .list-group-item:hover {
            background: #ffdee9;
            color: #000;
            transform: scale(1.03);
          }

          .admin-menu-container .list-group-item.active {
            background: #ff758c;
            color: white;
            font-weight: bold;
          }
        `}
      </style>

      <div className="text-center admin-menu-container">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
