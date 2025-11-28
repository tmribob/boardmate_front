import style from './CatalogPage.module.css';
import Filter from './../../Components/Filter'
import {useState} from "react";

const CatalogPage = () => {
  const [games, setGames] = useState([]);

  const [sort, setSort] = useState(1)
  const changeSort = (v) => {
    setSort(v);
  }
  return (<main className={style.main}>
      <Filter />
      <div>

      </div>
    </main>);
};

export default CatalogPage;