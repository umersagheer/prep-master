import { paths } from "../paths";

export const routes = [
  {
    path: paths.home,
    element: <p>Home</p>,
    errorElement: <p>Not found</p>,
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
