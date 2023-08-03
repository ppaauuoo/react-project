import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import Favorite from "./routes/Favorite";
import Chat from "./routes/Chat";

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import TodoList from "./routes/TodoList";

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
      { path: "/add/todo", element: <Create /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
