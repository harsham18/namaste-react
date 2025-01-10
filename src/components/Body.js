import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterBtn = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.0
    );
    setFilteredRestaurants(filtered);
  };

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
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated">
          <button onClick={filterBtn}>Top Rated Restaurant</button>
        </div>
      </div>
      <div className="resto-container">
        {filteredRestaurants.map((restaurant) => (
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
