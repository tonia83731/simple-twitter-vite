import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";

import MainHomePage from "./pages/user/MainHomePage";
import UserPage from "./pages/user/UserPage"
import SettingsPage from "./pages/user/SettingsPage"

function App() {
  return (
    <>
      <div
        id="app"
        className="w-screen h-screen text-sm tablet:text-base tablet:max-w-[960px] tablet:mx-auto desktop:max-w-[1140px]"
      >
        <BrowserRouter>
          <Routes>
            {/* <Route path="*" element={<HomePage />} /> */}
            <Route path="login" element={<LoginPage />} />
            <Route path="regist" element={<RegisterPage />} />
            <Route path="adminlogin" element={<AdminLoginPage />} />

            <Route path="main" element={<MainHomePage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="settings" element={<SettingsPage />} />
            {/* <Route path="main" element={<MainHomePage />} /> */}
            {/* <Route path="user" element={<UserProfilePage />} />
              <Route path="otherUser/:id" element={<OtherUserPage />} />
              <Route
                path="personalDetail/:id"
                element={<PersonalDetailPage />}
              />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="adminTwi" element={<AdminTwiListPage />} />
              <Route path="adminUser" element={<AdminUserListPage />} />
              <Route path="twiItem/:id" element={<TwiItemPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
