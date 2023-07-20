// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from './pages/user/LoginPage'

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Test File</h1>
      <h1 className="text-3xl font-bold underline">Test Again</h1> */}
      <div id="app" className="w-screen h-screen text-base md:text-sm">
        <LoginPage/>
      </div>
    </>
  );
}

export default App;
