import LoginPage from "../pages/login";
import SignUp from "../pages/sign-up";

import Layout from "../components/layout/Layout";
import NotFound from "../components/layout/NotFound";
import TestAttempt from "../pages/test-attempt";
import TestDescription from "../pages/test-description";
import TestsList from "../pages/tests-list";
import { paths } from "../paths";
import Dashboard from "../pages/dashboard";
import PurchasedTests from "../pages/purchased-tests";

export const routes = [
  {
    path: paths.home,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: paths.tests.list,
        element: <TestsList />,
        errorElement: <NotFound />,
      },
      {
        path: paths.tests.purchasedTests,
        element: <PurchasedTests />,
      },
      {
        path: paths.tests.description,
        element: <TestDescription />,
        errorElement: <NotFound />,
      },
      {
        path: paths.tests.attempt,
        element: <TestAttempt />,
        errorElement: <NotFound />,
      },
      {
        path: paths.auth.signUp,
        element: <SignUp />,
      },
      {
        path: paths.auth.logIn,
        element: <LoginPage />,
      },
      {
        path: paths.dashboard.overview,
        element: <Dashboard />,
        children: [
          {
            path: paths.dashboard.overview,
            element: <div>Dashboard</div>,
          },
        ],
      },
    ],
  },
];
