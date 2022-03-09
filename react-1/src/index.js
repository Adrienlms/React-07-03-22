import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { StateProvider } from './context/store';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

const app = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="expenses" element={<Expenses/>}/>
      <Route path="invoices" element={<Invoices/>}/>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
