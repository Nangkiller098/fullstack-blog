import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import Register from "./page/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./page/Single";
import Write from "./page/Write";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "*",
    element: <h1>404 not found</h1>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
