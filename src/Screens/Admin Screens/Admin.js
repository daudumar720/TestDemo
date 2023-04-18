import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDisputes from "./admin_disputes";
import AdminDisputesDetails from "./admin_disputes_details";
import AdminLoginPassword from "./admin_login_password";
import AdminPayment from "./admin_payments";
import AdminSeller from "./admin_sellers";
import AdminShippingInfo from "./admin_shipping_info";

function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/admin-disputes" element={<AdminDisputes />} />
        <Route
          path="/admin-disputes-details"
          element={<AdminDisputesDetails />}
        />
        <Route path="admin-login-password" element={<AdminLoginPassword />} />
        <Route path="admin-payment" element={<AdminPayment />} />
        <Route path="admin-seller" element={<AdminSeller />} />
        <Route path="admin-shipping-info" element={<AdminShippingInfo />} />
      </Routes>
    </div>
  );
}

export default Admin;
