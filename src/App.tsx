import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="mt-32 duration-150 lg:mt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
