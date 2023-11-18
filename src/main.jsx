import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import '../src/components/Home/Home.css';
import '../src/components/OurStore/Store.css';
import '../src/components/Blog/Blog.css';
import '../src/components/Contact/Contact.css';
import '../src/components/CompareProduct/CompareProduct.css';
import '../src/components/Wishlist/Wishlist.css';
import './assets/css/progress.css';
import './components/Authentication/Auth.css';
import './components/Policy/Policy.css';
import './components/SingleProduct/SingleProduct.css';
import './components/ProductCard/ProductCard.css';
import {Provider} from "react-redux";
import store from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
