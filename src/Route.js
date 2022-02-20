import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Course from "./page/Course";

const route = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Course />} />
            </Routes>
        </BrowserRouter>
    )
}

export default route;

