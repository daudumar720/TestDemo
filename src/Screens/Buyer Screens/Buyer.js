import React from "react";
import { Route, Routes } from "react-router-dom";
import BuyerHome from "./buyer_home";
import BuyerReturn from "./buyer_return";
import BuyerDispute from "./buyer_dispute";
import BuyerReturnComplete from "./buyer_return_complete";
import BuyerPaymentSuccess from "./buyer_payment_success";
import BuyerDelivery from "./buyer_delivery";
import BuyerNFT from "./buyer_nft";
import BuyerPayment from "./buyer_payment";
import BuyerMarketplace from "./buyer_marketplace";
import BuyerCart from "./buyer_cart";
import BuyerWishlist from "./buyer_wishlist";
import Cart from "./cart";

const Buyer = () => {
  return (
    <div>
      <Routes>
        <Route path="/buyer-home" element={<BuyerHome />} />
        <Route path="/buyer-return" element={<BuyerReturn />} />
        <Route path="/buyer-nft" element={<BuyerNFT />} />
        <Route path="/buyer-cart" element={<BuyerCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buyer-wishlist" element={<BuyerWishlist />} />
        <Route path="/buyer-return" element={<BuyerReturn />} />
        <Route path="/buyer-delivery" element={<BuyerDelivery />} />
        <Route path="/buyer-dispute" element={<BuyerDispute />} />
        <Route path="/buyer-marketplace" element={<BuyerMarketplace />} />
        <Route path="/buyer-payment" element={<BuyerPayment />} />
        <Route
          path="/buyer-return-complete"
          element={<BuyerReturnComplete />}
        />
        <Route
          path="/buyer-payment-success"
          element={<BuyerPaymentSuccess />}
        />
      </Routes>
    </div>
  );
};

export default Buyer;
