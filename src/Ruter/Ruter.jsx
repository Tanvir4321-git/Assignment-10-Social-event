
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import EroorPage from "../Pages/EroorPage";
import Home from "../Pages/Home";

import CreateEvent from "../Components/AllEvent/CreateEvent";
import JoinEvents from "../Components/AllEvent/JoinEvents";
import ManageEvents from "../Components/AllEvent/ManageEvents";
import UpcomingEvents from "../Pages/UpcomingEvents";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <EroorPage></EroorPage>,
    children: [
      {
        index: true,
        Component: Home
      },

      {
        path: '/upcoming-events',
        Component: UpcomingEvents
      },
      {
        path: '/createevent',
        Component: CreateEvent
      },
      {
        path: '/joinevent',
        Component: JoinEvents
      },
      {
        path: '/manageevent',
        Component: ManageEvents
      }
    ]


  },
]);
