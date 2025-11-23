import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useState} from "react";

import Header from "../Components/Header";
import {
  HomePage, ProfilePage, GamePage, CatalogPage, LoginPage, RegisterPage
} from "../Pages"
import img from '../avatar.png'

import './App.css'

const App = () => {
  const [profile, setProfile] = useState({avatar: img});
  // const [profile, setProfile] = useState({avatar: undefined});

  const location = useLocation();
  const hideHeader = ['/login', '/register'].includes(location.pathname);

  const login = () => {
    //BACK
    const newAvatar = img;
    setProfile({...profile, avatar: newAvatar})
  }

  return (<>
    {!hideHeader && <Header avatar={profile?.avatar} />}
    <Routes>
      <Route
        path="*"
        element={<Navigate
          to="/home"
          replace
        />}
      />
      <Route
        path="/catalog"
        element={<CatalogPage />}
      />
      <Route
        path="/game/:id"
        element={<GamePage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path={'/login'}
        element={<LoginPage login={login} />}
      />
      <Route
        path={'/register'}
        element={<RegisterPage />}
      />
      <Route
        path={'/profile'}
        element={<ProfilePage />}
      />

    </Routes>
  </>);
}

export default App;
