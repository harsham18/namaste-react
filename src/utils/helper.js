export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

export function topRatedData(restaurants) {
  const filteredData = restaurants.filter((res) => res.info.avgRating > 4.0);
  return filteredData;
}
