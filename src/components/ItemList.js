import { IMG_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item?.card?.info?.name}</span>
              <span>
                - Rs:
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="text-green-500 bg-white p-1 rounded-lg ">
                Add +
              </button>
            </div>

            <img src={IMG_URL + item?.card?.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
