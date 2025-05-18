import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import s from "./FavoriteButton.module.css";

const FavoriteButton = ({ carId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(carId));
  }, [carId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;
    if (favorites.includes(carId)) {
      updatedFavorites = favorites.filter((id) => id !== carId);
    } else {
      updatedFavorites = [...favorites, carId];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    // console.log("Favorites:", updatedFavorites);
  };

  return (
    <button onClick={toggleFavorite} className={s.button}>
      {isFavorite ? <AiFillHeart className={s.fill} /> : <AiOutlineHeart className={s.outline} />}
    </button>
  );
};

export default FavoriteButton;
