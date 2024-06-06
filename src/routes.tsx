import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/root-layout";
import Animation from "./routes/animation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/animation",
        element: <Animation />,
      },
    ],
  },
]);
