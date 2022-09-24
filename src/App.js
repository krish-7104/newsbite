import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewsArea from "./Components/NewsArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let pageSize = 6;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <NewsArea
              key="general"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="General"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <NewsArea
              key="entertainment"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Entertainment"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <NewsArea
              key="technology"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Technology"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <NewsArea
              key="sports"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Sports"
            />
          }
        ></Route>
        <Route
          path="/business"
          element={
            <NewsArea
              key="business"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Business"
            />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <NewsArea
              key="health"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Health"
            />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <NewsArea
              key="science"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="Science"
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
