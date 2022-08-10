import "babel-polyfill";

import {
  APP_INIT_ERROR,
  APP_READY,
  subscribe,
  initialize,
} from "@edx/frontend-platform";
import { AppProvider, ErrorPage } from "@edx/frontend-platform/react";
import React from "react";
import ReactDOM from "react-dom";

import { Header, CourseTabsNavigation } from "./Components/Header";
//import Header, { messages as headerMessages } from '@edx/frontend-component-header';

import Footer from "./Components/Footer/Footer";

import appMessages from "./i18n";
import LandingPage from "./Components/Landing-page/LandingPage";

import "./index.scss";
import "./_variables.scss";
subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <LandingPage />
      <Footer />
    </AppProvider>,
    document.getElementById("root")
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(
    <ErrorPage message={error.message} />,
    document.getElementById("root")
  );
});

initialize({
  messages: [appMessages],
});
