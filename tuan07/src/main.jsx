import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Thêm dòng này
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ⬅️ Bao App trong BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
