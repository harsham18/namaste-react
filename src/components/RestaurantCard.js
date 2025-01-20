import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    resData;
  const { loggedInfo } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] bg-gray-200 rounded-lg">
      <div className="w-9/12">
        <img
          className="rounded-lg"
          alt="Image-loading"
          src={IMG_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime}mins</h4>
        <h4>User: {loggedInfo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
