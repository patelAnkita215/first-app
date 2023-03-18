import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import HeaderComp from "./header";
import ExampleComponent from "./example-component";
import ClassComponent from "./exampleComponent/class-component";
import FunctionComponent from "./exampleComponent/function-component";
import ComponentName from "./exampleComponent/component-name";

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
    path: "/component",
    element: (
      <>
        <HeaderComp />
        <ExampleComponent />
      </>
    ),
    children: [
      {
        path: "/component/ComponentName",
        element: <ComponentName />,

        children: [
          {
            path: "/component/ComponentName/classComponent",
            element: <ClassComponent />,
          },
          {
            path: "/component/ComponentName/functionComponent",
            element: <FunctionComponent />,
          },
        ],
      },
    ],
  },
]);

export default MainRouter;
