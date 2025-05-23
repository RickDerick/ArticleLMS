import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ArticlesList from "./components/ArticlesList";
import ArticleForm from "./components/admin/ArticleForm";
import UserForm from "./components/admin/UsersForm";
import UsersList from "./components/admin/UsersList";
import ProfileSettings from "./components/ProfileSetting";
import NotFound from "./pages/NotFound"; 
import { ToastContainer } from "react-toastify";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
function App() {

  const { getUser, settingUser } = useAuth();
  const isAdmin = getUser()?.role === "admin";

 useEffect(() => {
  settingUser(JSON.parse(localStorage.getItem('articleLms_user') || '{}'));
 }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Dashboard Layout with Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<ArticlesList readOnly={isAdmin} />} />
            <Route path="profile" element={<ProfileSettings />} />

            {isAdmin ? (
              <>
                <Route path="admin/articles" element={<ArticlesList />} />
                <Route path="admin/articles/new" element={<ArticleForm />} />
                <Route path="articles/edit/:id" element={<ArticleForm />} />
                <Route path="admin/users" element={<UsersList />} />
                <Route path="admin/users/new" element={<UserForm />} />
                <Route path="admin/users/edit/:id" element={<UserForm />} />
              </>
            ) : (
              <>
                <Route path="admin/*" element={<Navigate to="/dashboard" replace />} />
                <Route path="articles/edit/:id" element={<Navigate to="/dashboard" replace />} />
              </>
            )}
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
