import LoginPage from "../pages/login";
import SignUp from "../pages/sign-up";
import { paths } from "../paths";

export const routes = [
  {
    path: paths.home,
    element: <p>Home</p>,
    errorElement: <p>Not found</p>,
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
    element: <div>Dashboard Overview</div>,
    children: [
      {
        path: paths.dashboard.overview,
        element: <div>Dashboard</div>,
      },
    ],
  },
];
