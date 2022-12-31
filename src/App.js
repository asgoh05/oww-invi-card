import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import router from "./router/router";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
