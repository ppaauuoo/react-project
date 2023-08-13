import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import Favorite from "./routes/Favorite";
import Chat from "./routes/Chat";

import TodoList from "./routes/TodoList";
import Edit from "./components/User/EditUser";
import Create from "./components/User/CreateUser";

import RecordList from "./routes/recordList";
import TodoForm from "./components/ItemForm";

import { Auth0Provider } from '@auth0/auth0-react';
import Shop from "./routes/Shop";
import ItemForm from "./components/ItemForm";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/todo", element: <TodoList /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/chat/:chatId", element: <Chat /> },
      {
        path: "/record",
        element: <RecordList />,
      },
      { path: "/edit/:id", element: <Edit /> },
      { path: "/add/record", element: <Create /> },
      { path: "/add/todo", element: <TodoForm /> },
      { path: "/shop", element: <Shop /> },
      { path: "/add/item", element: <ItemForm />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-zxrkgo60xcsyf3yv.us.auth0.com"
    clientId="CgZS6ckhmJisu89n9STUNqakRDtfozXM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
  </React.StrictMode>
);
