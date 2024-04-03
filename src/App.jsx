import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Landing, Register, Login, ForgotPassowrd, ProfileEdit, PasswordEdit, Recipes, Bookmark, Create, Edit, Detail, Search } from './pages';
import Auth from './components/Auth';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassowrd />} />
        <Route path="/recipes/search" element={<Search />} />
        <Route path="" element={<Auth/>}>
          <Route path="/profile" element={<ProfileEdit />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/changepassword" element={<PasswordEdit />} />
          <Route path="/profile/recipes" element={<Recipes />} />
          <Route path="/profile/bookmark" element={<Bookmark />} />
          <Route path="/recipes/detail" element={<Detail />} />
          <Route path="/recipes/detail/:id" element={<Detail />} />
          <Route path="/recipes/add" element={<Create />} />
          <Route path="/recipes/edit" element={<Edit />} />
          <Route path="/recipes/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
