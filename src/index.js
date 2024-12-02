import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./headers/about"
import Projects from "./headers/projects"
import Skills from "./headers/skills"
import Contacts from "./headers/contacts"

const AppLayout = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout /> // Corrected here
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/projects",
    element:<Projects/>
  },
  {
    path:"/skills",
    element:<Skills/>
  },
  {
    path:"/contacts",
    element:<Contacts/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRoute} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
