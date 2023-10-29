import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import PrivateRoutes from './lib/PrivateRoutes';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './lib/context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
