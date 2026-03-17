import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import axios from "axios";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get("/appsData.json");
          return res.data;
        },
        Component: Home
      },
      {
        path: 'apps',
        loader: async () => {
          const res = await axios.get("/appsData.json");
          return res.data;
        },
        Component: Apps
      },
      {
        path: 'apps/:appId',
        loader: async ({ params }) => {
          const res = await axios.get('/appsData.json');
          const appData = res.data.find(app => app.id === parseInt(params.appId));
          return appData;
        },
        Component: AppDetails
      }
    ]
  }
])

