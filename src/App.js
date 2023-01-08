import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import { AuthProvider } from './components/auth';
import Login from "./pages/login";
import SignUp from "./pages/singup";
import Dashboard from  './pages/dashboard' 
import PrivateRoute from "./components/privateRoute";

function App() {
  return (

    <AuthProvider>

      <Router>
      <Header/>
        <Routes>

         <Route path="/" element={<Home />} exact />
         <Route path="/dashboard" element={<Dashboard />}  />
         
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Routes>
        <Footer />

      </Router>

    </AuthProvider>
  );
}

export default App;
