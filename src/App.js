import React from "react";
import Community from "./Screens/Community Forum Screens/Community";
import Admin from "./Screens/Admin Screens/Admin";
import Index from "./Screens/index";
import Seller from "./Screens/Seller Screens/Seller";
import LoginScreen from "./Screens/LoginSignup/login_screen";
import SignupScreen from "./Screens/LoginSignup/signup_screen";
import Buyer from "./Screens/Buyer Screens/Buyer";

function App() {
  return (
    <React.Fragment>
      {/* <Community /> */}
      {/* <Admin /> */}
      {/* <Seller /> */}
      {/* <Index /> */}
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      <Buyer />
    </React.Fragment>
  );
}

export default App;
