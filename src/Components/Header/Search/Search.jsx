import style from './Search.module.css';
import {useState} from "react";
import {IoSearch} from "react-icons/io5";

const Search = () => {
  const [text, setText] = useState('')
  const handSearch = (value) => {
    setText(value)
  }
  return (<div className={style.searchArea}>
      <IoSearch className={style.ioSearch} />
      <input
        name="search"
        className={style.search}
        value={text}
        onChange={(e) => handSearch(e.target.value)}
        placeholder="Поиск игр..."
      />
    </div>);
};

export default Search;