import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <style>{`
        .policy-page {
          background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
          min-height: 100vh;
          padding: 40px 20px;
          border-radius: 12px;
        }
        .policy-img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .policy-text {
          background-color: rgba(255,255,255,0.8);
          padding: 25px;
          border-radius: 12px;
          font-size: 16px;
          line-height: 1.7;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .policy-text h4 {
          font-weight: 600;
          margin-bottom: 15px;
        }
      `}</style>

      <div className="row policy-page">
        <div className="col-md-6 mb-3">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            className="policy-img"
          />
        </div>
        <div className="col-md-6 policy-text">
          <h4>Privacy Policy</h4>
          <p>
            At EcomApp, we are committed to protecting your personal information
            and your right to privacy. When you use our site, we collect minimal
            data to enhance your shopping experience.
          </p>
          <p>
            We do not share or sell your personal data to third parties. Your
            data is only used to process orders, enhance product
            recommendations, and send relevant updates — only if you opt in.
          </p>
          <p>
            All payment information is processed securely via third-party
            gateways, and we do not store your card details.
          </p>
          <p>
            We use cookies to improve functionality and tailor content. You may
            disable cookies in your browser settings, but this may affect site
            performance.
          </p>
          <p>
            For any concerns, please contact our support team. We reserve the
            right to update our privacy policy as needed. Please check this page
            periodically.
          </p>
          <p>Last Updated: July 2025</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
