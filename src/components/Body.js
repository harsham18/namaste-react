import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { filterData, topRatedData } from "../utils/helper";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.6244967&lng=78.5877126&carousel=true&third_party_vendor=1"
      );
      const jsonData = await data.json();

      setlistOfRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error fetching Restaurant", error);
    }
  };
  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }
  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-rest">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchBtn}
            onChange={(e) => {
              setSearchBtn(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredData = filterData(searchBtn, listOfRestaurants);
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated">
          <button
            onClick={() => {
              const topRated = topRatedData(listOfRestaurants);
              setFilteredRestaurants(topRated);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resto-container">
        {filteredRestaurants.map((restaurant, i) => (
          <Link to={`/restaurants/${restaurant?.info?.id}`}>
            <RestaurantCard
              key={restaurant?.info?.id}
              resData={restaurant?.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
