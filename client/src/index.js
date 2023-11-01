import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./input.css";
import List from "./pages/list";
import AddRead from "./pages/addRead";
import Post from "./pages/post.js/[slug]";
import { Auth0Provider } from "@auth0/auth0-react";
import AboutUS from "./pages/aboutUs";

//const [userData, setuserdata] = useState([{}]);

//useEffect(() => {
//  fetch("/profile")
//    .then((Response) => Response.json())
//    .then((data) => {
//      setuserdata(data);
//    });
//}, []);

const domain = "dev-lb4i8mzz3vnmeana.us.auth0.com";
const clientID = "T5jOoFN11REVoNfvCfRIGeoweLVo3Afp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/addRead",
    element: <AddRead />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "/Us",
    element: <AboutUS />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
