import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantMenuItems();
  }, []);

  const getRestaurantMenuItems = async () => {
    const data = await fetch(`${MENU_URL}${resId}`);
    const json = await data.json();
    setMenuItems(json.data);
  };
  if (menuItems === null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    menuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  //console.log(menuItems);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {avgRating} rating - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
