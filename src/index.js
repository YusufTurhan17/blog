import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppLayout from "./components/AppLayout";
import { ThemeProvider } from "./Context/ThemeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Photos from "./Pages/Photos";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={null}>
        <Router>
          <AppLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/photos">
                <Photos />
              </Route>
              <Route exact path="/blog-detail/:id">
                <BlogDetails />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </AppLayout>
        </Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
