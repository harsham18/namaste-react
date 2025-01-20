import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { filterData, topRatedData } from "../utils/helper";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInfo, setUserName } = useContext(UserContext);
  useEffect(() => {
    getRestaurants();
    //console.log(listOfRestaurants);
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4337243&lng=78.334092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      //console.log(jsonData);
      setlistOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
      <div className="flex">
        <div className="p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchBtn}
            onChange={(e) => {
              setSearchBtn(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredData = filterData(searchBtn, listOfRestaurants);
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const topRated = topRatedData(listOfRestaurants);
              setFilteredRestaurants(topRated);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="p-4 m-auto">
          <label>UserName: </label>
          <input
            className="border border-black p-2"
            value={loggedInfo}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
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
