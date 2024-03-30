import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store, persistor } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // <Provider store={store}>
    //     <PersistGate persistor={persistor}>
    //         <App />
    //     </PersistGate>
    // </Provider>
)
