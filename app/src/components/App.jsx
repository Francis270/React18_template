import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Home } from "./";

const App = () => {
    return (
        <BrowserRouter>
            <div id="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;