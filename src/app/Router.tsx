import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "src/pages/Homepage";
import { Layout } from "./Layout";
import { About } from "src/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: (
          <div className=" w-full grid place-items-center h-80">
            <div className="text-3xl">404 Страница не найдена</div>
          </div>
        ),
      },
    ],
  },
]);
