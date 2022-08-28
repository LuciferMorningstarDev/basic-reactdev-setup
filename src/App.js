import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class App extends React.Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="App">
                    <Routes>
                        <Route path="/" element={<div className="TODO ADDING FUNC COMPONENT" />} />
                    </Routes>
                </div>
                {/* <Footer /> */}
                <ToastContainer
                    position="bottom-right"
                    theme="dark"
                    limit={5}
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
}
