import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSnipper from "components/LoadingSpinner";
const HomePage = lazy(() => import("containers/HomePage"));

const index = () => {
  return (
    <>
      <Suspense fallback={<LoadingSnipper />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};
export default index;
