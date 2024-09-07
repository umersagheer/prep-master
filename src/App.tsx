import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { routes } from "./routes/routes";
import {
  NavigationMenu,
  NavigationMenuList,
} from "./components/ui/navigation-menu";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
          <RouterProvider router={router} />
    </>
  );
}

export default App;
