import style from './CatalogPage.module.css';
import Filter from './../../Components/Filter'
import {useState} from "react";
import GamesHeader from "../../Components/GamesHeader";
import GridGames from "../../Components/GridGames";

const CatalogPage = () => {
  const [games, setGames] = useState([{
    id: 0,
    name: "Каркасон",
    imgSrc: "./img.png",
    genres: [1],
    rate: 4.6,
    difficulty: 1,
    duration: {min: 30, max: 90},
    numberPeople: {min: 2, max: 5},
    followers: 12345
  }, {
    id: 1,
    name: "Root",
    imgSrc: "./img.png",
    genres: [1],
    rate: 4.6,
    difficulty: 1,
    duration: {min: 30, max: 60},
    numberPeople: {min: 2, max: 4},
    followers: 3232
  }, {
    id: 2,
    name: "Gfddfd",
    imgSrc: "./img.png",
    genres: [1],
    rate: 4.6,
    difficulty: 1,
    duration: {min: 30, max: 90},
    numberPeople: {min: 2, max: 5},
    followers: 12
  }, {
    id: 3,
    name: "sdfsdfds",
    imgSrc: "./img.png",
    genres: [1],
    rate: 4.6,
    difficulty: 1,
    duration: {min: 30, max: 90},
    numberPeople: {min: 2, max: 5},
    followers: 3232
  }]);

  const [sort, setSort] = useState(1)
  const onSortChange = (v) => {
    setSort(v);
  }
  return (<main className={style.main}>
    <Filter />
    <div className={style.catalog}>
      <GamesHeader
        gamesCount={games.length}
        sort={sort}
        onSortChange={onSortChange}
      />
      <GridGames games={games} />
    </div>
  </main>);
};

export default CatalogPage;