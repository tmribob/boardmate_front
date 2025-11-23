import style from './Header.module.css';
import Logo from "../Logo";
import {NavLink} from "react-router-dom";
import Search from "../Search";
import Button from "../Button";
import NavBar from "../NavBar";

const Header = ({avatar}) => {
  return (<div className={style.header}>
    <div className={style.headerContainer}>
      <Logo />
      <NavBar />
    </div>
    <div className={style.headerContainer}>
      <Search />
      {!!avatar ? <NavLink to="/profile">
        <img
          className={style.avatar}
          src={avatar}
          alt="profile"
        />
      </NavLink> : <NavLink to="/login">
        <Button
          content="Войти"
          theme="green"
          title="Вход"
        />
      </NavLink>}
    </div>
  </div>);
};

export default Header;