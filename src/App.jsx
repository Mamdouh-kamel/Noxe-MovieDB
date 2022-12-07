import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Movies from "./components/Movies/Movies";
import Network from "./components/Network/Network";
import NotFound from "./components/NotFound/NotFound";
import People from "./components/People/People";
import Signin from "./components/Signin/Signin";
import Tv from "./components/Tv/Tv";
import RegistreLayout from "./Layouts/RegistreLayout";
import SystemLayout from "./Layouts/SystemLayout";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
 
let routes = createBrowserRouter([
  {
    path: "/",
    element: <SystemLayout />,
    children: [
      { index: true, element: <ProtectedRoutes ><Home /></ProtectedRoutes> },
      { path: "Noxe-MovieDB", element: <ProtectedRoutes ><Home /></ProtectedRoutes> },
      { path: "movies", element: <ProtectedRoutes ><Movies /></ProtectedRoutes> },
      { path: "details/:id/:media", element: <ProtectedRoutes ><ItemDetails /></ProtectedRoutes> },
      { path: "people", element: <ProtectedRoutes ><People /></ProtectedRoutes> },
      { path: "tv", element: <ProtectedRoutes ><Tv /></ProtectedRoutes> },
      { path: "network", element: <ProtectedRoutes ><Network /></ProtectedRoutes> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <RegistreLayout />,
    children: [
      { index: true, element: <Signin /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

  return (
    <>
          
          <RouterProvider router={routes} />
    </>
  );
}

export default App;
