import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import axios from "axios";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installations from "../Pages/Installations/Installations";
import NoDataFound from "../Shared/NoDataFound/NoDataFound";


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
          const appData = res.data.find(app => app.id === Number(params.appId));
          if (!appData) {
            throw new Response("Not Found", { status: 404 });
          }
          return appData;
        },
        Component: AppDetails,
        errorElement: <NoDataFound emplyStatetitle={"App Is Not Found!"} description={"The app you are looking for does not exist or has been removed."}/>
      },
      {
        path: 'installations',
        loader: async () => {
          const res = await axios.get("/appsData.json");
          return res.data;
        },
        Component: Installations
      }
    ]
  }
])

