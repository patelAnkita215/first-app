import React,{ Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import HeaderComp from "./main-component/header";
import ExampleComponent from "./example-component";
import PropsCompo from "./example-component/class-component/props-example/props-example";
import StateLifecycleExample from "./example-component/class-component/state-lifecycle/state-lifecycleexample";
import UseCallbackExample from "./useCallback-example/UseCallbackExample";
import UsememoExample from "./useMemo-example/UsememoExample";

const ExampleCompoRoute = React.lazy(()=>{ return import('./example-component/component-name-route') })
const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderComp />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <HeaderComp />
        <AboutPage></AboutPage>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <HeaderComp />
        <ContactPage />
      </>
    ),
  },
  {
    path: "/props-exm",
    element: (
      <>
        <HeaderComp />
        <PropsCompo />
      </>
    ),
  },
  {
    path: "/lifecycle-exm",
    element: (
      <>
        <HeaderComp />
        <StateLifecycleExample />
      </>
    ),
  },
  {
    path: "/usecallback-ex",
    element: (
      <>
        <HeaderComp />
        <UseCallbackExample />
      </>
    ),
  },
  {
    path: "/usememoexample",
    element: (
      <>
        <HeaderComp />
        <UsememoExample />
      </>
    ),
  },
  {
    path: "/component",
    element: (
      <>
        <HeaderComp />
        <ExampleComponent />
      </>
    ),
    children: [
      {
        path: "componentname/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ExampleCompoRoute/></Suspense>,
      },
    ],
  },
]);

export default MainRouter;
