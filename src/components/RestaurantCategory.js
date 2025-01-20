import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleItems = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="m-auto my-4 w-6/12 bg-gray-100 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleItems}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
