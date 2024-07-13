import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./component/Services";
import Refer_Upi from "./component/refer-upi/Refer_Upi";
import Bank_account_opening from "./component/refer-upi/Bank_account_opening";
import Demat_account from "./component/refer-upi/Demat_account";
import Small_loan from "./component/refer-upi/Small_loan";
import Personal_loan from "./component/refer-upi/Personal_loan";
import Credit_card from "./component/refer-upi/Credit_card";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";


function App() {



  return (
    <>
      <div className="App">
        <AuthProvider>
          <Router>
             <Navbar />
            <Routes>
              <Route path="/" element={<Services />} />
              <Route path="/refer-upi" element={<Refer_Upi />} />
              <Route path="/credit_card" element={<Credit_card />} />
              <Route path="/bank_account_opening" element={<Bank_account_opening />} />
              <Route path="/demat_account" element={<Demat_account />} />
              <Route path="/small_loan" element={<Small_loan />} />
              <Route path="/personal_loan" element={<Personal_loan />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/admin" element={<Admin />} />
              {/* <Route path="/admin/allusers" element={<Users />} />
              <Route path="/admin/allproducts" element={<Products />} /> */}

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
