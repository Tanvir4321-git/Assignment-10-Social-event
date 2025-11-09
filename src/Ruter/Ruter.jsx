
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import EroorPage from "../Pages/EroorPage";


 export  const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<EroorPage></EroorPage>
    
  },
]);
