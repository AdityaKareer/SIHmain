import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Centers from "./pages/centers/Centers";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/registration/login/Login";
import User_register from "./pages/registration/register/User_register";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/center/Center";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           
              <Outlet />
            
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/centers",
          element: <Centers />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/centers/:id",
          element: <Product />,
        },

      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user_register",
      element: <User_register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;