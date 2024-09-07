
import Layout from "../components/layout/Layout";
import NotFound from "../components/layout/NotFound";
import TestAttempt from "../pages/test-attempt";
import TestDescription from "../pages/test-description";
import TestsList from "../pages/tests-list";
import { paths } from "../paths";

export const routes = [
  {path: paths.home,
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
  {
    path: paths.tests.list,
    element: <TestsList/>,
    errorElement: <NotFound/>,
  },
  {
    path: paths.tests.description,
    element: <TestDescription/>,
    errorElement: <NotFound/>,
  },
  {
    path: paths.tests.attempt,
    element: <TestAttempt/>,
    errorElement: <NotFound/>,
  },
  {
    path: paths.dashboard.overview,
    element: <div>Dashboard Overview</div>,
    children: [
      {
        path: paths.dashboard.overview,
        element: <div>Dashboard</div>,
      },
    ],
  },]}
];
