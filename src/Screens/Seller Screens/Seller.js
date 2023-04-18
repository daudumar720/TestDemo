import React from "react";
import { Routes, Route } from "react-router-dom";
import SellerPayment from "./Seller_Payment";
import SellerReturn from "./Seller_Return";
import SellerReturnDetail from "./Seller_Return_Details";
import SellerInventory from "./Seller_Inventory";
import SellerQuestionResponse from "./Seller_Question_response";
import SellerHome from "./Seller_Home";
import SellerBid from "./Seller_Bid";
import SellerProfileSetting from "./Seller_Profile_Setting";
import SellerQuestion from "./Seller_Question";
import SellerFeedback from "./Seller_Feedback";
import SellerBidDetail from "./Seller_Bid_Detail";
import SellerOrder from "./Seller_Order";
import SellerOrderDetail from "./Seller_Order_Detail";
import SellerCreateNFT from "./Seller_Create_NFT";

const Seller = () => {
  return (
    <div>
      <Routes>
        <Route path="/seller-home" element={<SellerHome />} />
        <Route path="/seller-create-nft" element={<SellerCreateNFT />} />
        <Route path="/seller-payment" element={<SellerPayment />} />
        <Route path="/seller-feedback" element={<SellerFeedback />} />
        <Route path="/seller-order" element={<SellerOrder />} />
        <Route path="/seller-order-detail" element={<SellerOrderDetail />} />
        <Route path="/seller-return" element={<SellerReturn />} />
        <Route path="/seller-return-detail" element={<SellerReturnDetail />} />
        <Route path="/seller-inventory" element={<SellerInventory />} />
        <Route path="/seller-bid" element={<SellerBid />} />
        <Route path="/seller-bid-detail" element={<SellerBidDetail />} />
        <Route path="/seller-question" element={<SellerQuestion />} />
        <Route
          path="/seller-question-response"
          element={<SellerQuestionResponse />}
        />
        <Route
          path="/seller-profile-setting"
          element={<SellerProfileSetting />}
        />
      </Routes>
    </div>
  );
};

export default Seller;
