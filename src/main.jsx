import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routers from "./routes/root";
import App from "./App"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 
const router = createHashRouter(routers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App/>
    </RouterProvider>
  </React.StrictMode>
);