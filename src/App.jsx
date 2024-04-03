import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import {
  Landing,
  Register,
  Login,
  ForgotPassowrd,
  ProfileEdit,
  PasswordEdit,
  Recipes,
  Bookmark,
  Create,
  Edit,
  Detail,
  Search,
} from "./pages";
import Auth from "./components/Auth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassowrd />} />
        <Route path="/recipes/search" element={<Search />} />
        <Route
          path="/profile"
          element={
            <Auth>
              <ProfileEdit />
            </Auth>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <Auth>
              <ProfileEdit />
            </Auth>
          }
        />
        <Route
          path="/profile/changepassword"
          element={
            <Auth>
              <PasswordEdit />
            </Auth>
          }
        />
        <Route
          path="/profile/recipes"
          element={
            <Auth>
              <Recipes />
            </Auth>
          }
        />
        <Route
          path="/profile/bookmark"
          element={
            <Auth>
              <Bookmark />
            </Auth>
          }
        />
        <Route
          path="/recipes/detail"
          element={
            <Auth>
              <Detail />
            </Auth>
          }
        />
        <Route
          path="/recipes/detail/:id"
          element={
            <Auth>
              <Detail />
            </Auth>
          }
        />
        <Route
          path="/recipes/add"
          element={
            <Auth>
              <Create />
            </Auth>
          }
        />
        <Route
          path="/recipes/edit"
          element={
            <Auth>
              <Edit />
            </Auth>
          }
        />
        <Route
          path="/recipes/edit/:id"
          element={
            <Auth>
              <Edit />
            </Auth>
          }
        />
        <Route path="/" element={<Outlet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
