
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import EroorPage from "../Pages/EroorPage";
import Home from "../Pages/Home";

import CreateEvent from "../Components/AllEvent/CreateEvent";
import JoinEvents from "../Components/AllEvent/JoinEvents";
import ManageEvents from "../Components/AllEvent/ManageEvents";
import UpcomingEvents from "../Pages/UpcomingEvents";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Loading from "../Components/Loading";
import ViewEvent from "../Components/ViewEvent";
import UpdateEvent from "../Components/UpdateEvent";


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
        loader: () => fetch('https://assignment-10-server-three-iota.vercel.app/upcomingEvent'),
        Component: UpcomingEvents,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/signup',
        Component: Register
      },
      {
        path: '/signin',
        Component: Login
      },
      {
        path: '/createevent',
        element: <PrivateRoute>
          <CreateEvent></CreateEvent>
        </PrivateRoute>
      },
      {
        path: '/viewEvent/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-three-iota.vercel.app/view-event/${params.id}`),
        Component: ViewEvent,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/joinevent',

        element: <PrivateRoute>
          <JoinEvents></JoinEvents>
        </PrivateRoute>
      },
      {
        path: '/updateEvent/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-three-iota.vercel.app/getUpdate/${params.id}`),
        element: <PrivateRoute>
          <UpdateEvent></UpdateEvent>
        </PrivateRoute>
      },
      {
        path: '/manageevent',
        element: <PrivateRoute>
          <ManageEvents></ManageEvents>
        </PrivateRoute>
      }
    ]


  },
]);
