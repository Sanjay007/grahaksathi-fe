import './App.css';
import Navbar from './component/Navbar';
import Services from './component/Services';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Refer_Upi from './component/refer-upi/Refer_Upi';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Bank_account_opening from './component/refer-upi/Bank_account_opening';
import Demat_account from './component/refer-upi/Demat_account';
import Small_loan from './component/refer-upi/Small_loan';
import Personal_loan from './component/refer-upi/Personal_loan';
import Credit_card from './component/refer-upi/Credit_card';


function App() {
  return (
    <>

    <div className="App">
    <Router>
     <Navbar/>
    <Routes>
    <Route path="/" element={ <Services/>} /> 
    <Route path="/refer-upi" element={ <Refer_Upi/>} />
    <Route path="/credit_card" element={ <Credit_card/>} />
    <Route path="/bank_account_opening" element={ <Bank_account_opening/>} />
    <Route path="/demat_account" element={ <Demat_account/>} />
    <Route path="/small_loan" element={ <Small_loan/>} />
    <Route path="/personal_loan" element={ <Personal_loan/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
     </Router>
    </div>
    
    </>
  );
}

export default App;
