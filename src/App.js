import React, { useRef, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga4";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

import { Toaster } from "react-hot-toast";

import { GA_CODE } from "./constants";

// Initialize Google Analytics
ReactGA.initialize(GA_CODE);

const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.send({ hitType: "pageview", page: page });
};

const App = () => {
    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add("is-loaded");
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <div>
                    <Toaster />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <LayoutDefault>
                                    <Home />
                                </LayoutDefault>
                            }
                        />
                    </Routes>
                </div>
            )}
        />
    );
};

export default App;
