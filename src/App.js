import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/error/error";
import RootLayout from "./components/layouts/rootLayout";
import AuthLayout from "./components/layouts/authLayout";
import Home from "./pages/home";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
